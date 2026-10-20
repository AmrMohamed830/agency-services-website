Add-Type -AssemblyName System.Drawing

$sourcePath = "G:\Agency Services\public\images\logo.png"
$bmp = [System.Drawing.Bitmap]::new($sourcePath)

$w = $bmp.Width
$h = $bmp.Height

Write-Host "Width: $w, Height: $h"

# Find bounds of non-gray pixels or inspect corner pixels
$p1 = $bmp.GetPixel(10, 10)
$p2 = $bmp.GetPixel(50, 10)
Write-Host "P1: R=$($p1.R), G=$($p1.G), B=$($p1.B)"
Write-Host "P2: R=$($p2.R), G=$($p2.G), B=$($p2.B)"

$bmp.Dispose()
