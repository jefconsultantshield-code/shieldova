param (
    [string]$repoUrl = ""
)

$projectPath = "C:\Users\Andres Mauricio FQ\shieldova"
cd $projectPath

# 1. Inicializar git si no existe
if (-not (Test-Path "$projectPath\.git")) {
    Write-Host "📦 Inicializando repositorio Git..."
    git init
    git branch -M main

    if ($repoUrl -ne "") {
        Write-Host "🔗 Configurando remoto en $repoUrl"
        git remote add origin $repoUrl
    } else {
        Write-Host "⚠️ No se proporcionó URL de GitHub en el primer setup."
        Write-Host "   Usa: .\auto-push-github.ps1 -repoUrl https://github.com/tuusuario/shieldova.git"
        exit
    }
} else {
    Write-Host "ℹ️ Repositorio Git ya inicializado"
}

# 2. Verificar remoto
$remoteUrl = git remote get-url origin 2>$null
if (-not $remoteUrl) {
    if ($repoUrl -ne "") {
        Write-Host "🔗 Configurando remoto en $repoUrl"
        git remote add origin $repoUrl
    } else {
        Write-Host "⚠️ No se encontró remoto configurado."
        Write-Host "   Usa: .\auto-push-github.ps1 -repoUrl https://github.com/tuusuario/shieldova.git"
        exit
    }
} else {
    Write-Host "ℹ️ Remoto existente: $remoteUrl"
}

# 3. Detectar cambios
$status = git status --porcelain
if ($status) {
    Write-Host "📝 Cambios detectados, preparando commit..."
    git add .

    $commitMsg = "🔄 Auto update - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git commit -m $commitMsg

    Write-Host "⬆️ Subiendo cambios a GitHub..."
    git push origin main
    Write-Host "✅ Cambios subidos correctamente"
} else {
    Write-Host "✔ No hay cambios para subir"
}
