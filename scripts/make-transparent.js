const sharp = require('sharp');
const path = require('path');

async function processImage() {
  const inputPath = path.join(__dirname, '../public/images/hero-element.jpg');
  const outputPath = path.join(__dirname, '../public/images/hero-element.png');

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels; // 4 (RGBA)

  // Transform pixels: alpha is based on maximum RGB brightness and color saturation
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Max channel value
    const maxVal = Math.max(r, g, b);
    
    if (maxVal < 15) {
      // Pure or near-black background -> completely transparent
      data[i + 3] = 0;
    } else {
      // Smooth gradient ramp up
      const alpha = Math.min(255, Math.pow((maxVal - 15) / 180, 0.85) * 255);
      data[i + 3] = Math.round(alpha);
    }
  }

  await sharp(data, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png()
    .toFile(outputPath);

  console.log('Successfully generated transparent PNG at:', outputPath);
}

processImage().catch(console.error);
