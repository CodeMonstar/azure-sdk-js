<#
.SYNOPSIS
Spell checks JS public API surface as expored to review/**/*.md

.DESCRIPTION
Checks spelling of package's public API. Some packages may be excluded by
criteria in the cspell.json config. The precise list of files to scan is
determined by cspell. If a pacakge is opted out in the cspell.json a command
will still be issued to scan that folder but cspell will report 0 files checked.

.PARAMETER ServiceDirectory
Scopes scanning to a particular service directory (e.g. `storage`). Otherwise
scan everything under the `sdk/` folder. Default is empty string (scan 
everything).

.EXAMPLE
./spell-check-public-api.ps1

Spell check all public API specs for all services and packages under `sdk`

.EXAMPLE
./spell-check-public-api.ps1 -ServiceDirectory storage

Spell check all public API specs for packages under `sdk/storage`

#>
param (
  [Parameter(mandatory = $false)]
  $ServiceDirectory = ''
)

."$PSScriptRoot/../common/scripts/common.ps1"

$REPO_ROOT = Resolve-Path "$PSScriptRoot/../.."

$directoresToScan = @((Resolve-Path "$REPO_ROOT/sdk/$ServiceDirectory"))
if (!$ServiceDirectory) {
  $directoresToScan = Get-ChildItem -Path "$REPO_ROOT/sdk" -Directory
}

$packageDirectories = @()
foreach ($serviceDirectory in $directoresToScan) {
  # Only include directories which have a `reivew` folder as that is the folder
  # that will be scanned.
  $packageDirectories += `
  (Get-ChildItem -Path $serviceDirectory -Directory).Where({
    (Get-ChildItem -Path $_ -Directory).Where({
          $_.Name -eq 'review'
        })
    })
}

$failed = $false
$cspellOutput = @()
foreach ($directory in $packageDirectories) {
  $scanGlob = "$directory/review/**/*.md"
  Write-Host "cspell lint --config '$REPO_ROOT/.vscode/cspell.json' --no-must-find-files --root $REPO_ROOT --relative $scanGlob"
  $cspellOutput += &"$PSScriptRoot/../../eng/common/scripts/Invoke-Cspell.ps1" `
    lint `
    --config "$REPO_ROOT/.vscode/cspell.json" `
    --no-must-find-files `
    --root $REPO_ROOT `
    --relative `
    $scanGlob

  if ($LASTEXITCODE) {
    $failed = $true
  }
}

if ($failed) {
  foreach ($log in $cspellOutput) {
    LogError $log
  }
  LogError "Spelling errors detected. To correct false positives or learn about spell checking see: https://aka.ms/azsdk/engsys/spellcheck"
  exit 1
}
