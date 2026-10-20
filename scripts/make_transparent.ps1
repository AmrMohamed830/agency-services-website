Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::new("G:\Agency Services\public\images\logo-cropped.png")
$w = $src.Width
$h = $src.Height

$rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
$bmpData = $src.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$bytesCount = [Math]::Abs($bmpData.Stride) * $h
$bytes = New-Object byte[] $bytesCount

[System.Runtime.InteropServices.Marshal]::Copy($bmpData.Scan0, $bytes, 0, $bytesCount)

# Each pixel is 4 bytes: [B, G, R, A]
for ($i = 0; $i -lt $bytesCount; $i += 4) {
    $b = [int]$bytes[$i]
    $g = [int]$bytes[$i + 1]
    $r = [int]$bytes[$i + 2]

    # Checkerboard gray check
    $diffRG = [Math]::Abs($r - $g)
    $diffGB = [Math]::Abs($g - $b)
    $diffRB = [Math]::Abs($r - $b)

    if ($r -ge 35 -and $r -le 90 -and $g -ge 35 -and $g -le 90 -and $b -ge 35 -and $b -le 90 -and $diffRG -le 10 -and $diffGB -le 10 -and $diffRB -le 10) {
        $bytes[$i + 3] = 0 # Alpha = 0 (Transparent)
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $bmpData.Scan0, $bytesCount)
$src.UnlockBits($bmpData)

$destPath = "G:\Agency Services\public\images\logo-transparent.png"
$src.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$src.Dispose()

Write-Host "SAVED TRUE TRANSPARENT LOGO TO: $destPath"
