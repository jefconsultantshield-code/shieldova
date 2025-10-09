[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)]
  [string]$Path,

  [string]$OutJson = ".\project-master-audit.json",
  [string]$OutText = ".\project-master-audit.md"
)

function Test-PathSafe { param([string]$p) try { Test-Path -LiteralPath $p } catch { return $false } }

function Parse-PackageJson {
  param([string]$pjPath)
  if (-not (Test-PathSafe $pjPath)) { return $null }
  try { Get-Content -LiteralPath $pjPath -Raw | ConvertFrom-Json }
  catch { return $null }
}

function Get-NextRoutes {
  param([string]$root)

  $routes = @{
    appRoutes  = @()
    pageRoutes = @()
    apiRoutes  = @()
  }

  # --- App Router ---
  $appFiles = Get-ChildItem -Path (Join-Path $root "app") -Recurse -Include "page.*","layout.*","route.*","loading.*","error.*" -ErrorAction SilentlyContinue
  foreach ($f in $appFiles) {
    $rel = $f.FullName.Substring($root.Length).Replace("\","/")
    $url = $rel -replace "^/app","" -replace "/page\..*$","" -replace "/layout\..*$","" -replace "/route\..*$","" -replace "/loading\..*$","" -replace "/error\..*$",""
    if ($url -eq "") { $url = "/" }
    $routes.appRoutes += @{ file=$rel; url=$url }
  }

  # --- Pages Router ---
  $pageFiles = Get-ChildItem -Path (Join-Path $root "pages") -Recurse -Include "*.ts","*.tsx","*.js","*.jsx" -ErrorAction SilentlyContinue
  foreach ($f in $pageFiles) {
    $rel = $f.FullName.Substring($root.Length).Replace("\","/")
    if ($rel -match "/api/") { continue } # API se maneja aparte
    $url = $rel -replace "^/pages","" -replace "\.(ts|tsx|js|jsx)$","" -replace "/index$","/"
    if ($url -eq "") { $url = "/" }
    $routes.pageRoutes += @{ file=$rel; url=$url }
  }

  # --- API Routes ---
  $apiFiles = @()
  $apiFiles += Get-ChildItem -Path (Join-Path $root "pages/api") -Recurse -Include "*.ts","*.tsx","*.js" -ErrorAction SilentlyContinue
  $apiFiles += Get-ChildItem -Path (Join-Path $root "app/api") -Recurse -Include "route.ts","route.js" -ErrorAction SilentlyContinue
  foreach ($f in $apiFiles) {
    $rel = $f.FullName.Substring($root.Length).Replace("\","/")
    $url = $rel -replace "^/pages","" -replace "^/app","" -replace "\.(ts|tsx|js)$","" -replace "/route$",""
    $routes.apiRoutes += @{ file=$rel; url=$url }
  }

  return $routes
}

function Analyze-Project {
  param([string]$root)

  $result = @{
    rootPath     = $root
    filesCount   = @{ total=0; byExt=@{} }
    dependencies = @{}
    scripts      = @{}
    technology   = @{}
    routes       = @{}
    configs      = @()
    envFiles     = @()
    infra        = @{}
    generatedAt  = (Get-Date).ToString("s")
  }

  # --- Archivos ---
  $files = Get-ChildItem -Path $root -Recurse -File -ErrorAction SilentlyContinue
  $result.filesCount.total = $files.Count
  $byExt = $files | Group-Object Extension
  foreach ($g in $byExt) { $result.filesCount.byExt[$g.Name] = $g.Count }

  # --- package.json ---
  $pkg = Parse-PackageJson -pjPath (Join-Path $root "package.json")
  if ($pkg) {
    $result.dependencies = $pkg.dependencies
    $result.scripts      = $pkg.scripts
    $result.technology.framework = if ($pkg.dependencies.next) { "Next.js" }
    $result.technology.frontend  = if ($pkg.dependencies.react) { "React" }
    if ($pkg.dependencies."tailwindcss") { $result.technology.styling = "Tailwind CSS" }
  }

  # --- Configuración ---
  $configs = @("next.config.js","tailwind.config.js","postcss.config.js","tsconfig.json","jsconfig.json","next-sitemap.config.js","eslint.config.mjs")
  foreach ($cfg in $configs) {
    $cfgPath = Join-Path $root $cfg
    if (Test-PathSafe $cfgPath) { $result.configs += $cfg }
  }

  # --- Archivos .env ---
  $envs = @(".env",".env.local",".env.production",".env.development")
  foreach ($e in $envs) {
    $envPath = Join-Path $root $e
    if (Test-PathSafe $envPath) { $result.envFiles += $e }
  }

  # --- Infraestructura ---
  if (Test-PathSafe (Join-Path $root ".github\workflows")) { $result.infra.ci = "GitHub Actions" }
  if (Test-PathSafe (Join-Path $root "vercel.json")) { $result.infra.hosting = "Vercel" }

  # --- Rutas ---
  $result.routes = Get-NextRoutes -root $root

  return $result
}

function Export-ReportMarkdown {
  param($result,[string]$OutText)
  $md = @()
  $md += "# Informe Maestro del Proyecto"
  $md += "- Framework: ${($result.technology.framework)}"
  $md += "- Frontend: ${($result.technology.frontend)}"
  $md += "- Styling: ${($result.technology.styling)}"
  $md += ""
  $md += "## Conteo de archivos"
  $md += "- Total: ${($result.filesCount.total)}"
  foreach ($ext in $result.filesCount.byExt.Keys) {
    $md += "- ${ext}: ${($result.filesCount.byExt[$ext])}"
  }
  $md += ""
  $md += "## Rutas detectadas"
  $md += "### App Router"
  foreach ($r in $result.routes.appRoutes) { $md += "- ${($r.url)} (${($r.file)})" }
  $md += "### Pages Router"
  foreach ($r in $result.routes.pageRoutes) { $md += "- ${($r.url)} (${($r.file)})" }
  $md += "### API Routes"
  foreach ($r in $result.routes.apiRoutes) { $md += "- ${($r.url)} (${($r.file)})" }
  $md += ""
  $md += "## Configuración encontrada"
  foreach ($c in $result.configs) { $md += "- ${c}" }
  $md += ""
  $md += "## Archivos .env"
  foreach ($e in $result.envFiles) { $md += "- ${e}" }
  $md += ""
  $md += "## Infraestructura"
  foreach ($k in $result.infra.Keys) { $md += "- ${k}: ${($result.infra[$k])}" }
  Set-Content -LiteralPath $OutText -Value ($md -join "`r`n") -Encoding UTF8
}

# MAIN
try {
  $report = Analyze-Project -root $Path
  $jsonOut = $report | ConvertTo-Json -Depth 20
  Set-Content -LiteralPath $OutJson -Value $jsonOut -Encoding UTF8
  Export-ReportMarkdown -result $report -OutText $OutText
  Write-Host "✅ Auditoría completada. Resultados en $OutJson y $OutText"
}
catch {
  Write-Host "Error en análisis: $($_.Exception.Message)" -ForegroundColor Red
}
