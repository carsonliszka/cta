import sharp from "sharp";
import { writeFileSync } from "node:fs";

const W = 1200, H = 630;

const base = await sharp("public/assets/img/growler-launch.jpg")
  .resize(W, H, { fit: "cover", position: "attention" })
  .grayscale()
  .modulate({ brightness: 0.82 })
  .linear(1.08, -10)
  .toBuffer();

const grad = Buffer.from(
  `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="1" x2="0.35" y2="0.15">
        <stop offset="0" stop-color="#010101" stop-opacity="0.88"/>
        <stop offset="0.55" stop-color="#010101" stop-opacity="0.25"/>
        <stop offset="1" stop-color="#010101" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    <rect width="${W}" height="${H}" fill="#010101" fill-opacity="0.1"/>
  </svg>`,
);

const logoW = 360;
const logo = await sharp("public/assets/brand/cta-logo-white.svg", { density: 400 })
  .resize({ width: logoW })
  .toBuffer();
const logoH = Math.round((logoW * 777) / 3186);

const out = await sharp(base)
  .composite([
    { input: grad, top: 0, left: 0 },
    { input: logo, top: H - logoH - 60, left: 64 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toBuffer();

writeFileSync("public/og.jpg", out);
const m = await sharp(out).metadata();
console.log("og.jpg", `${m.width}x${m.height}`, `${Math.round(out.length / 1024)}KB`);
