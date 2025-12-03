import { Jimp } from 'jimp';

async function main() {
    try {
        const fs = await import('fs');
        const buffer = fs.readFileSync('public/logo.jfif');
        const image = await Jimp.read(buffer);
        const width = image.bitmap.width;
        const height = image.bitmap.height;
        const colorCounts = {};

        // Sample pixels
        for (let x = 0; x < width; x += 10) {
            for (let y = 0; y < height; y += 10) {
                const hex = image.getPixelColor(x, y).toString(16).slice(0, 6); // Get hex without alpha
                // Filter out whites/near-whites and blacks/near-blacks
                const r = parseInt(hex.substr(0, 2), 16);
                const g = parseInt(hex.substr(2, 2), 16);
                const b = parseInt(hex.substr(4, 2), 16);

                if (r > 240 && g > 240 && b > 240) continue;
                if (r < 20 && g < 20 && b < 20) continue;

                colorCounts[hex] = (colorCounts[hex] || 0) + 1;
            }
        }

        const sorted = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
        const top5 = sorted.slice(0, 5).map(([hex]) => '#' + hex);

        console.log('EXTRACTED_COLORS:', JSON.stringify(top5));
    } catch (err) {
        console.error(err);
    }
}

main();
