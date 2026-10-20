Add-Type -AssemblyName System.Drawing

$b = [System.Drawing.Bitmap]::new("G:\Agency Services\public\images\logo.png")
$w = $b.Width
$h = $b.Height

$minX = 99999
$maxX = 0
$minY = 99999
$maxY = 0

for ($y = 0; $y -lt $h; $y += 8) {
    for ($x = 0; $x -lt $w; $x += 8) {
        $p = $b.GetPixel($x, $y)
        # White letters (R>180, G>180, B>180) or colored SM (B>140, abs(R-G)>30)
        $isWhite = ($p.R -gt 150 -and $p.G -gt 150 -and $p.B -gt 150)
        $isColor = ([Math]::Abs([int]$p.R - [int]$p.G) -gt 25 -or [Math]::Abs([int]$p.B - [int]$p.G) -gt 25)
        
        if ($isWhite -or $isColor) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "FOUND: minX=$minX, maxX=$maxX, minY=$minY, maxY=$maxY"

# Now crop cleanly
$pad = 16
$minX = [Math]::Max(0, $minX - $pad)
$minY = [Math]::Max(0, $minY - $pad)
$cropW = ($maxX - $minX) + ($pad * 2)
$cropH = ($maxY - $minY) + ($pad * 2)

Write-Host "Crop: X=$minX, Y=$minY, W=$cropW, H=$cropH"

$cropped = New-Object System.Drawing.Bitmap($cropW, $cropH)
$g = [System.Drawing.Graphics]::FromImage($cropped)
$srcRect = New-Object System.Drawing.Rectangle($minX, $minY, $cropW, $cropH)
$destRect = New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)
$g.DrawImage($b, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$b.Dispose()

$cropped.Save("G:\Agency Services\public\images\logo-cropped.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()

Write-Host "Cropped image saved to public\images\logo-cropped.png"
