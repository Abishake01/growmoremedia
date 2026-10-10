import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

async function jumpAndShot(href, name, wait) {
  await page.click(`a[href="${href}"]`);
  await page.waitForTimeout(wait);
  await page.screenshot({ path: `/private/tmp/claude-502/-Users-abishaket-Desktop-personal/4eb3826d-6e12-47fe-9ff7-402a747ee2da/scratchpad/${name}.png` });
}

await jumpAndShot('#about', 'settle-about', 900);
await jumpAndShot('#contact', 'settle-contact', 900);
await jumpAndShot('#pricing', 'settle-pricing', 900);
await jumpAndShot('#work', 'settle-work', 900);
await browser.close();
