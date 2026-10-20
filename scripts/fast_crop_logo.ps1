$csharpCode = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;

public class LogoProcessor
{
    public static void MakeTransparent(string srcPath, string destPath)
    {
        using (Bitmap src = new Bitmap(srcPath))
        {
            int w = src.Width;
            int h = src.Height;

            BitmapData srcData = src.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
            
            int minX = w, maxX = 0, minY = h, maxY = 0;
            
            unsafe
            {
                byte* ptr = (byte*)srcData.Scan0;
                for (int y = 0; y < h; y++)
                {
                    byte* row = ptr + (y * srcData.Stride);
                    for (int x = 0; x < w; x++)
                    {
                        byte b = row[x * 4];
                        byte g = row[x * 4 + 1];
                        byte r = row[x * 4 + 2];

                        bool isChecker = (r >= 35 && r <= 95 && g >= 35 && g <= 95 && b >= 35 && b <= 95 
                                          && Math.Abs(r - g) <= 12 && Math.Abs(g - b) <= 12 && Math.Abs(r - b) <= 12);

                        if (!isChecker)
                        {
                            if (x < minX) minX = x;
                            if (x > maxX) maxX = x;
                            if (y < minY) minY = y;
                            if (y > maxY) maxY = y;
                        }
                    }
                }
            }
            src.UnlockBits(srcData);

            if (minX >= maxX || minY >= maxY)
            {
                minX = 0; maxX = w - 1; minY = 0; maxY = h - 1;
            }

            int pad = 20;
            minX = Math.Max(0, minX - pad);
            minY = Math.Max(0, minY - pad);
            maxX = Math.Min(w - 1, maxX + pad);
            maxY = Math.Min(h - 1, maxY + pad);

            int cropW = maxX - minX + 1;
            int cropH = maxY - minY + 1;

            using (Bitmap dest = new Bitmap(cropW, cropH, PixelFormat.Format32bppArgb))
            {
                BitmapData srcD = src.LockBits(new Rectangle(minX, minY, cropW, cropH), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
                BitmapData dstD = dest.LockBits(new Rectangle(0, 0, cropW, cropH), ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);

                unsafe
                {
                    byte* sPtr = (byte*)srcD.Scan0;
                    byte* dPtr = (byte*)dstD.Scan0;

                    for (int y = 0; y < cropH; y++)
                    {
                        byte* sRow = sPtr + (y * srcD.Stride);
                        byte* dRow = dPtr + (y * dstD.Stride);

                        for (int x = 0; x < cropW; x++)
                        {
                            byte b = sRow[x * 4];
                            byte g = sRow[x * 4 + 1];
                            byte r = sRow[x * 4 + 2];

                            bool isChecker = (r >= 35 && r <= 95 && g >= 35 && g <= 95 && b >= 35 && b <= 95 
                                              && Math.Abs(r - g) <= 12 && Math.Abs(g - b) <= 12 && Math.Abs(r - b) <= 12);

                            if (isChecker)
                            {
                                dRow[x * 4] = 0;
                                dRow[x * 4 + 1] = 0;
                                dRow[x * 4 + 2] = 0;
                                dRow[x * 4 + 3] = 0;
                            }
                            else
                            {
                                dRow[x * 4] = b;
                                dRow[x * 4 + 1] = g;
                                dRow[x * 4 + 2] = r;
                                dRow[x * 4 + 3] = 255;
                            }
                        }
                    }
                }
                src.UnlockBits(srcD);
                dest.UnlockBits(dstD);

                dest.Save(destPath, ImageFormat.Png);
            }
        }
    }
}
"@

$cp = New-Object System.CodeDom.Compiler.CompilerParameters
$cp.ReferencedAssemblies.Add("System.Drawing.dll") | Out-Null
$cp.CompilerOptions = "/unsafe"

Add-Type -TypeDefinition $csharpCode -CompilerParameters $cp

[LogoProcessor]::MakeTransparent("G:\Agency Services\public\images\logo.png", "G:\Agency Services\public\images\smart-media-logo-clean.png")
Write-Host "Processed logo successfully!"
