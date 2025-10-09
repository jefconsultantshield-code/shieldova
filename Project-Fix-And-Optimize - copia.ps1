[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)]
  [string]$Path,

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

# Archivos clave
$appDir     = Join-Path $Path "app"
$pageFile   = Join-Path $appDir "page.tsx"
$layoutFile = Join-Path $appDir "layout.tsx"
$apiDir     = Join-Path $Path "pages\api"
$apiFile    = Join-Path $apiDir "hello.ts"
$envFile    = Join-Path $Path ".env.local"
$gitignore  = Join-Path $Path ".gitignore"

# Asegurar carpeta app
if (-not (Test-Path $appDir)) {
    New-Item -ItemType Directory -Path $appDir -Force | Out-Null
    $log.Add("📂 Creada carpeta app/")
}

# Backup antes de tocar nada
Backup-File -filePath $pageFile   -backupRoot $backupRoot -log ([ref]$log)
Backup-File -filePath $layoutFile -backupRoot $backupRoot -log ([ref]$log)
Backup-File -filePath $apiFile    -backupRoot $backupRoot -log ([ref]$log)
Backup-File -filePath $envFile    -backupRoot $backupRoot -log ([ref]$log)
Backup-File -filePath $gitignore  -backupRoot $backupRoot -log ([ref]$log)

# Crear app/page.tsx
if (-not (Test-Path $pageFile)) {
  Set-Content -Path $pageFile -Value @"
export default function Home() {
  return (
    <main>
      <h1>Bienvenido a Shieldova</h1>
      <p>Página raíz generada automáticamente.</p>
    </main>
  )
}
"@ -Encoding UTF8
  $log.Add("✅ Creado app/page.tsx")
}

# Crear app/layout.tsx
if (-not (Test-Path $layoutFile)) {
  Set-Content -Path $layoutFile -Value @"
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shieldova',
  description: 'Sitio optimizado con Next.js y Tailwind',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  )
}
"@ -Encoding UTF8
  $log.Add("✅ Creado app/layout.tsx")
}

# Crear API de ejemplo
if (-not (Test-Path $apiDir)) { New-Item -ItemType Directory -Path $apiDir -Force | Out-Null }
if (-not (Test-Path $apiFile)) {
  Set-Content -Path $apiFile -Value @"
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Hola desde Shieldova API' })
}
"@ -Encoding UTF8
  $log.Add("✅ Creado pages/api/hello.ts")
}

# Crear .env.local
if (-not (Test-Path $envFile)) {
  Set-Content -Path $envFile -Value "# Variables de entorno locales" -Encoding UTF8
  $log.Add("✅ Creado .env.local")
}

# Asegurar exclusión en .gitignore
if (Test-Path $gitignore) {
  $gi = Get-Content $gitignore
  if (-not ($gi -match "^\s*\.env")) {
    Add-Content -Path $gitignore -Value "`n# Excluir variables de entorno`n.env*"
    $log.Add("✅ Actualizado .gitignore para excluir .env*")
  }
}

# Mover artefactos
$artifactDir = Join-Path $Path "__artifacts__"
if (-not (Test-Path $artifactDir)) { New-Item -ItemType Directory -Path $artifactDir | Out-Null }

Get-ChildItem -Path $Path -Recurse -Include *.map,*.pack -ErrorAction SilentlyContinue | ForEach-Object {
  if ($_.FullName -notmatch "\\\.next\\") {
    Backup-File -filePath $_.FullName -backupRoot $backupRoot -log ([ref]$log)
    Move-Item -Path $_.FullName -Destination $artifactDir -Force
    $log.Add("♻️ Movido artefacto: $($_.Name) → __artifacts__")
  }
}

# Guardar log en backup
$logFile = Join-Path $backupRoot "changes.log.md"
$logContent = @("# Registro de cambios", "Fecha: $(Get-Date)", "")
$logContent += $log
Set-Content -Path $logFile -Value ($logContent -join "`r`n") -Encoding UTF8

Write-Host "🚀 Optimización completada con backup en $backupRoot"
Write-Host "📜 Log de cambios guardado en $logFile"
