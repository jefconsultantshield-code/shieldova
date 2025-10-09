[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)]
  [string]$Path,

  [string]$Buscar = "shieldops",
  [string]$Reemplazar = "shieldova",

  [switch]$Restore
)

function Backup-File {
  param([string]$filePath,[string]$backupRoot,[ref]$log)

  if (Test-Path $filePath) {
    $rel = $filePath.Substring($Path.Length).TrimStart("\","/")
    $dest = Join-Path $backupRoot $rel
    $destDir = Split-Path $dest -Parent
    if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }
    Copy-Item -Path $filePath -Destination $dest -Force
    $log.Value.Add("📦 Backup de $rel")
  }
}

function Restore-Backup {
  param([string]$backupRoot)

  if (-not (Test-Path $backupRoot)) {
    Write-Host "⚠️ No se encontró backup en $backupRoot"
    return
  }

  Get-ChildItem -Path $backupRoot -Recurse -File | ForEach-Object {
    $rel = $_.FullName.Substring($backupRoot.Length).TrimStart("\","/")
    $dest = Join-Path $Path $rel
    $destDir = Split-Path $dest -Parent
    if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }
    Copy-Item -Path $_.FullName -Destination $dest -Force
    Write-Host "♻️ Restaurado: $dest"
  }
}

# --- MAIN ---
$backupRoot = Join-Path $Path ("__backup__\" + (Get-Date -Format "yyyyMMdd_HHmmss"))
$log = New-Object System.Collections.Generic.List[string]

if ($Restore) {
  $latest = Get-ChildItem -Path (Join-Path $Path "__backup__") -Directory | Sort-Object LastWriteTime -Descending | Select-Object -First 1
  if ($latest) {
    Restore-Backup -backupRoot $latest.FullName
    Write-Host "✅ Restauración completada desde $($latest.FullName)"
  } else {
    Write-Host "⚠️ No hay backups disponibles."
  }
  exit
}

New-Item -ItemType Directory -Path $backupRoot -Force | Out-Null

# Extensiones seguras
$extensiones = @(".js",".ts",".jsx",".tsx",".json",".html",".css",".scss",".md",".txt",".yml",".yaml",".env",".config",".ini")

# Archivos candidatos
$archivos = Get-ChildItem -Path $Path -Recurse -File | Where-Object { $extensiones -contains $_.Extension.ToLower() }

Write-Host "🔍 Archivos encontrados: $($archivos.Count)"

# Procesamiento en paralelo
$archivos | ForEach-Object -Parallel {
    param($using:Buscar,$using:Reemplazar,$using:backupRoot,$using:Path)

    try {
        $contenido = Get-Content -Path $_.FullName -Raw -Encoding UTF8
        if ($contenido -match [Regex]::Escape($using:Buscar)) {
            # Backup
            $rel = $_.FullName.Substring($using:Path.Length).TrimStart("\","/")
            $dest = Join-Path $using:backupRoot $rel
            $destDir = Split-Path $dest -Parent
            if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }
            Copy-Item -Path $_.FullName -Destination $dest -Force

            # Reemplazo
            $nuevo = $contenido -replace [Regex]::Escape($using:Buscar), $using:Reemplazar
            Set-Content -Path $_.FullName -Value $nuevo -Encoding UTF8

            Write-Host "✅ Reemplazado en: $($_.FullName)"
        }
    } catch {
        Write-Host "⚠️ Error en $($_.FullName): $_"
    }
} -ThrottleLimit 8   # controla cuántos archivos procesa en paralelo

# Guardar log
$logFile = Join-Path $backupRoot "changes.log.md"
$log | Out-File -FilePath $logFile -Encoding UTF8
Write-Host "📝 Log guardado en $logFile"
Write-Host "✅ Proceso completado."
