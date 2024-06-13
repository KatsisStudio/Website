$ErrorActionPreference = "Stop"

# Setup
$paths = "../img/members","../img/projects"
foreach ($path in $paths) {
    if (-not (Test-Path $path)) {

        New-Item -Path $path -ItemType "directory"
    }
}

# Projects
Get-ChildItem "../data/projects/" |
Foreach-Object {
    $path = "../img/projects/$($_)"
    if (-not (Test-Path $path)) {
        New-Item -Path $path -ItemType "directory"
    }
    Push-Location "../data/projects/$($_)"
    try
    {
        Write-Output $path
        magick mogrify -resize 400x300> -path "../../../img/projects/$($_)" *
    }
    finally
    {
        Pop-Location
    }
}

# Members
Push-Location "../data/members/"
try
{
    $path = "../../img/members/"
    Write-Output $path
    magick mogrify -resize 400x300> -path $path *
}
finally
{
    Pop-Location
}