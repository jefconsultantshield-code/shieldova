[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)]
  [string]$Path,

  [string]$OutJson = ".\quality-guard.report.json",
  [string]$OutText = ".\quality-guard.report.md"
)

function Test-PathSafe { param([string]$p) try { Test-Path -LiteralPath $p } catch { return $false } }
function Read-Json { param([string]$p) try { Get-Content -LiteralPath $p -Raw | ConvertFrom-Json } catch { return $null } }

function Exists-NonEmpty {
  param([string]$p)
  if (-not (Test-PathSafe $p)) { return $false }
  try {
    $info = Get-Item -LiteralPath $p -ErrorAction Stop
    if ($info.PSIsContainer) { return $true }
    $size = (Get-Item -LiteralPath $p -ErrorAction Stop).Length
    return ($size -ge 1)
  } catch { return $false }
}

function Check-RoutePresence {
  param([string]$root)
  $checks = @{
    appDir        = Test-PathSafe (Join-Path $root "app")
    pagesDir      = Test-PathSafe (Join-Path $root "pages")
    appPage       = Exists-NonEmpty (Join-Path $root "app\page.tsx")
    appLayout     = Exists-NonEmpty (Join-Path $root "app\layout.tsx")
    pagesIndexTs  = Exists-NonEmpty (Join-Path $root "pages\index.tsx")
    pagesIndexJs  = Exists-NonEmpty (Join-Path $root "pages\index.js")
    pagesApi      = Test-PathSafe (Join-Path $root "pages\api")
    appApi        = Test-PathSafe (Join-Path $root "app\api")
    appApiRoutes  = @(Get-ChildItem -Path (Join-Path $root "app\api") -Recurse -Include "route.ts","route.js" -ErrorAction SilentlyContinue | Select-Object -ExpandProperty FullName)
    pagesApiFiles = @(Get-ChildItem -Path (Join-Path $root "pages\api") -Recurse -Include "*.ts","*.js","*.tsx","*.jsx" -ErrorAction SilentlyContinue | Select-Object -ExpandProperty FullName)
  }
  return $checks
}

function Check-Configs {
  param([string]$root)
  $names = @("next.config.js","tailwind.config.js","postcss.config.js","tsconfig.json","jsconfig.json","next-sitemap.config.js","eslint.config.mjs")
  $list = @()
  foreach ($n in $names) {
    $p = Join-Path $root $n
    $list += [PSCustomObject]@{
      name    = $n
      exists  = Test-PathSafe $p
      nonEmpty= Exists-NonEmpty $p
    }
  }
  return $list
}

function Check-Env {
  param([string]$root)
  $envs = @(".env",".env.local",".env.production",".env.development")
  $found = @()
  foreach ($e in $envs) {
    $p = Join-Path $root $e
    if (Test-PathSafe $p) {
      $found += [PSCustomObject]@{ name=$e; nonEmpty=Exists-NonEmpty $p }
    }
  }
  $gitignorePath = Join-Path $root ".gitignore"
  $gitignoreHasEnv = $false
  if (Test-PathSafe $gitignorePath) {
    $gi = Get-Content -LiteralPath $gitignorePath -ErrorAction SilentlyContinue
    $gitignoreHasEnv = ($gi | Where-Object { $_ -match "^\s*\.env" }).Count -gt 0
  }
  return @{ found=$found; gitignoreHasEnv=$gitignoreHasEnv }
}

function Check-Package {
  param([string]$root)
  $pkg = Read-Json -p (Join-Path $root "package.json")
  if (-not $pkg) { return $null }
  $scripts = @{}
  foreach ($n in @("dev","build","start","lint","postbuild")) {
    $scripts[$n] = ($pkg.scripts.$n) -as [string]
  }
  $deps = $pkg.dependencies
  $devDeps = $pkg.devDependencies
  return @{
    scripts   = $scripts
    hasNext   = [bool]$deps.next
    hasReact  = [bool]$deps.react
    hasTailwind = [bool]$deps."tailwindcss"
    hasNextSitemap = [bool]$devDeps."next-sitemap"
    hasEslint = [bool]$devDeps."eslint"
    pkgName   = $pkg.name
    pkgVer    = $pkg.version
  }
}

function Check-Noise {
  param([string]$root)
  $files = Get-ChildItem -Path $root -Recurse -File -ErrorAction SilentlyContinue
  $mapsOutsideNext = $files | Where-Object {
    $_.Extension -eq ".map" -and ($_.FullName -notmatch "\\\.next\\")
  }
  $packFiles = $files | Where-Object { $_.Extension -eq ".pack" }
  return @{
    mapsOutsideNextCount = $mapsOutsideNext.Count
    packFilesCount = $packFiles.Count
  }
}

function Build-Recommendations {
  param($routeChecks,$configs,$env,$pkg,$noise)
  $recs = @()

  # Rutas principales
  if (-not $routeChecks.appPage -and -not $routeChecks.pagesIndexTs -and -not $routeChecks.pagesIndexJs) {
    $recs += "**Rutas:** No hay página raíz detectada. Crear app/page.tsx (App Router) o pages/index.tsx (Pages Router)."
  }
  if ($routeChecks.appDir -and -not $routeChecks.appLayout) {
    $recs += "**App Router:** Falta layout.tsx. Añádelo para metadatos, fuentes y estilos globales."
  }
  if ($routeChecks.pagesApi -eq $false -and $routeChecks.appApi -eq $false) {
    $recs += "**API:** No se detectan endpoints. Si tu sitio requiere backend, define pages/api/* o app/api/*/route.ts."
  } elseif (($routeChecks.pagesApiFiles.Count + $routeChecks.appApiRoutes.Count) -eq 0) {
    $recs += "**API:** Directorios presentes pero vacíos. Verifica rutas y archivos."
  }

  # Configs críticas
  foreach ($c in $configs) {
    if (-not $c.exists) { $recs += "**Config:** Falta ${($c.name)}. Crea o documenta su ausencia." }
    elseif (-not $c.nonEmpty) { $recs += "**Config:** ${($c.name)} está vacío o inválido." }
  }

  # Env y .gitignore
  if ($env.found.Count -eq 0) {
    $recs += "**.env:** No se detectan variables. Si usas keys, define .env.local y exclúyelo en .gitignore."
  } elseif (-not $env.gitignoreHasEnv) {
    $recs += "**.env:** .gitignore no excluye .env*. Añade reglas para evitar filtrar secretos."
  }

  # Package
  if ($pkg) {
    foreach ($pair in $pkg.scripts.GetEnumerator()) {
      if (-not $pair.Value) { $recs += "**Scripts:** Falta script ${($pair.Name)} en package.json." }
    }
    if (-not $pkg.hasNext) { $recs += "**Deps:** No se detecta next en dependencies." }
    if (-not $pkg.hasReact) { $recs += "**Deps:** No se detecta react en dependencies." }
    if (-not $pkg.hasTailwind) { $recs += "**Deps:** No se detecta tailwindcss (si no usas, quita su config para coherencia)." }
    if (-not $pkg.hasNextSitemap) { $recs += "**SEO:** next-sitemap no está en devDependencies; si usas postbuild, instálalo." }
    if (-not $pkg.hasEslint) { $recs += "**Lint:** eslint no detectado; agrega para control de calidad." }
  } else {
    $recs += "**package.json:** No válido o no encontrado."
  }

  # Ruido
  if ($noise.mapsOutsideNextCount -gt 0) {
    $recs += "**Artefactos:** ${($noise.mapsOutsideNextCount)} sourcemaps fuera de .next. Considera moverlos o excluirlos."
  }
  if ($noise.packFilesCount -gt 0) {
    $recs += "**Artefactos:** ${($noise.packFilesCount)} .pack detectados. Verifica si son necesarios y exclúyelos del repo si no."
  }

  return $recs
}

# MAIN
try {
  $root = $Path
  $routeChecks = Check-RoutePresence -root $root
  $configs     = Check-Configs -root $root
  $env         = Check-Env -root $root
  $pkg         = Check-Package -root $root
  $noise       = Check-Noise -root $root

  $report = @{
    rootPath   = $root
    summary    = @{
      appDir       = $routeChecks.appDir
      pagesDir     = $routeChecks.pagesDir
      hasRootPage  = ($routeChecks.appPage -or $routeChecks.pagesIndexTs -or $routeChecks.pagesIndexJs)
      apiCount     = ($routeChecks.pagesApiFiles.Count + $routeChecks.appApiRoutes.Count)
    }
    routes     = $routeChecks
    configs    = $configs
    env        = $env
    package    = $pkg
    noise      = $noise
    recommendations = (Build-Recommendations -routeChecks $routeChecks -configs $configs -env $env -pkg $pkg -noise $noise)
    generatedAt = (Get-Date).ToString("s")
  }

  # JSON
  $json = $report | ConvertTo-Json -Depth 6
  Set-Content -LiteralPath $OutJson -Value $json -Encoding UTF8

  # Markdown
  $md = @()
  $md += "# Quality guard report"
  $md += ""
  $md += "## Resumen"
  $md += "- **Root path:** ${($report.rootPath)}"
  $md += "- **App dir:** ${($report.summary.appDir)}"
  $md += "- **Pages dir:** ${($report.summary.pagesDir)}"
  $md += "- **Página raíz detectada:** ${($report.summary.hasRootPage)}"
  $md += "- **APIs detectadas:** ${($report.summary.apiCount)}"
  $md += ""
  $md += "## Rutas"
  $md += "- **app/page.tsx:** ${($routeChecks.appPage)}"
  $md += "- **app/layout.tsx:** ${($routeChecks.appLayout)}"
  $md += "- **pages/index.tsx:** ${($routeChecks.pagesIndexTs)}"
  $md += "- **pages/index.js:** ${($routeChecks.pagesIndexJs)}"
  $md += "- **pages/api dir:** ${($routeChecks.pagesApi)}"
  $md += "- **app/api dir:** ${($routeChecks.appApi)}"
  $md += "- **app/api routes:** ${($routeChecks.appApiRoutes.Count)}"
  $md += "- **pages/api files:** ${($routeChecks.pagesApiFiles.Count)}"
  $md += ""
  $md += "## Configs"
  foreach ($c in $configs) { $md += "- **${($c.name)}:** exists=${($c.exists)}; nonEmpty=${($c.nonEmpty)}" }
  $md += ""
  $md += "## Env"
  $md += "- **.gitignore excluye .env:** ${($env.gitignoreHasEnv)}"
  foreach ($e in $env.found) { $md += "- **${($e.name)}:** nonEmpty=${($e.nonEmpty)}" }
  $md += ""
  $md += "## package.json"
  if ($pkg) {
    $md += "- **name:** ${($pkg.pkgName)}"
    $md += "- **version:** ${($pkg.pkgVer)}"
    foreach ($k in $pkg.scripts.Keys) { $md += "- **script ${k}:** ${($pkg.scripts[$k])}" }
    $md += "- **deps:** next=${($pkg.hasNext)}; react=${($pkg.hasReact)}; tailwind=${($pkg.hasTailwind)}; next-sitemap=${($pkg.hasNextSitemap)}; eslint=${($pkg.hasEslint)}"
  } else {
    $md += "- **package.json:** no válido o no encontrado"
  }
  $md += ""
  $md += "## Artefactos"
  $md += "- **sourcemaps fuera de .next:** ${($noise.mapsOutsideNextCount)}"
  $md += "- **.pack files:** ${($noise.packFilesCount)}"
  $md += ""
  $md += "## Recomendaciones accionables"
  foreach ($r in $report.recommendations) { $md += "- ${r}" }

  Set-Content -LiteralPath $OutText -Value ($md -join "`r`n") -Encoding UTF8
  Write-Host "✅ Quality guard ejecutado. Resultados en ${OutJson} y ${OutText}"
}
catch {
  Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}
