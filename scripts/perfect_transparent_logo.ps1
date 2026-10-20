Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::new("G:\Agency Services\public\images\logo-cropped.png")
$w = $src.Width
$h = $src.Height

$rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
$bmpData = $src.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$bytesCount = [Math]::Abs($bmpData.Stride) * $h
$bytes = New-Object byte[] $bytesCount

[System.Runtime.InteropServices.Marshal]::Copy($bmpData.Scan0, $bytes, 0, $bytesCount)

for ($i = 0; $i -lt $bytesCount; $i += 4) {
    $b = [int]$bytes[$i]
    $g = [int]$bytes[$i + 1]
    $r = [int]$bytes[$i + 2]

    # White text in SMART MEDIA
    $isWhite = ($r -gt 170 -and $g -gt 170 -and $b -gt 170)

    # Cyan/Blue/Purple in SM monogram
    $isColored = ($b -gt 110 -and ([Math]::Abs($r - $g) -gt 18 -or [Math]::Abs($b - $g) -gt 22))

    if ($isWhite -or $isColored) {
        $bytes[$i + 3] = 255 # Keep logo pixel
    } else {
        $bytes[$i + 3] = 0   # Completely transparent background
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $bmpData.Scan0, $bytesCount)
$src.UnlockBits($bmpData)

$destPath = "G:\Agency Services\public\images\logo-clean.png"
$src.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$src.Dispose()

Write-Host "SAVED PERFECT CLEAN LOGO TO: $destPath"
