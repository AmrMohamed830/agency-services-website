Add-Type -AssemblyName System.Drawing

$sourcePath = "G:\Agency Services\public\images\logo.png"
$bmp = [System.Drawing.Bitmap]::new($sourcePath)

$w = $bmp.Width
$h = $bmp.Height

$minX = $w
$maxX = 0
$minY = $h
$maxY = 0

# Fast scan to find logo bounds
for ($y = 0; $y -lt $h; $y += 4) {
    for ($x = 0; $x -lt $w; $x += 4) {
        $p = $bmp.GetPixel($x, $y)
        $r = [int]$p.R
        $g = [int]$p.G
        $b = [int]$p.B
        
        # Check if NOT checkerboard:
        # Checkerboard is gray between 48 and 72 with small delta
        $isChecker = ($r -ge 45 -and $r -le 78 -and $g -ge 45 -and $g -le 78 -and $b -ge 45 -and $b -le 78 -and [Math]::Abs($r - $g) -le 8 -and [Math]::Abs($g - $b) -le 8)
        
        if (-not $isChecker) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Logo Bounds: minX=$minX, maxX=$maxX, minY=$minY, maxY=$maxY"

# Pad bounds slightly
$padding = 24
$minX = [Math]::Max(0, $minX - $padding)
$minY = [Math]::Max(0, $minY - $padding)
$maxX = [Math]::Min($w - 1, $maxX + $padding)
$maxY = [Math]::Min($h - 1, $maxY + $padding)

$cropW = $maxX - $minX + 1
$cropH = $maxY - $minY + 1

Write-Host "Cropped Dimensions: ${cropW}x${cropH}"

# Create 32-bit ARGB bitmap for transparency
$outBmp = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($cy = 0; $cy -lt $cropH; $cy++) {
    $srcY = $minY + $cy
    for ($cx = 0; $cx -lt $cropW; $cx++) {
        $srcX = $minX + $cx
        $p = $bmp.GetPixel($srcX, $srcY)
        $r = [int]$p.R
        $g = [int]$p.G
        $b = [int]$p.B
        
        # Determine alpha
        # Is it checkerboard?
        $diffRG = [Math]::Abs($r - $g)
        $diffGB = [Math]::Abs($g - $b)
        $diffRB = [Math]::Abs($r - $b)
        
        $isChecker = ($r -ge 40 -and $r -le 85 -and $g -ge 40 -and $g -le 85 -and $b -ge 40 -and $b -le 85 -and $diffRG -le 8 -and $diffGB -le 8 -and $diffRB -le 8)
        
        if ($isChecker) {
            $outBmp.SetPixel($cx, $cy, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            # Logo pixel - preserve exact color and full opacity
            $outBmp.SetPixel($cx, $cy, [System.Drawing.Color]::FromArgb(255, $r, $g, $b))
        }
    }
}

$bmp.Dispose()

# Save as transparent PNG
$destPath = "G:\Agency Services\public\images\smart-media-logo-clean.png"
$outBmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$outBmp.Dispose()

Write-Host "Saved clean transparent logo to $destPath"
