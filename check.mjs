import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('pageerror', e => errors.push(String(e)));
page.on('console', m => { if (m.type()==='error') errors.push(m.text()); });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

// Click "About" nav link (jumps straight to WhyChooseUs section) and screenshot immediately
await page.click('a[href="#about"]');
await page.waitForTimeout(150); // minimal wait, simulate quick screenshot after click
await page.screenshot({ path: '/private/tmp/claude-502/-Users-abishaket-Desktop-personal/4eb3826d-6e12-47fe-9ff7-402a747ee2da/scratchpad/jump-about.png' });

await page.click('a[href="#contact"]');
await page.waitForTimeout(150);
await page.screenshot({ path: '/private/tmp/claude-502/-Users-abishaket-Desktop-personal/4eb3826d-6e12-47fe-9ff7-402a747ee2da/scratchpad/jump-contact.png' });

await page.click('a[href="#pricing"]');
await page.waitForTimeout(150);
await page.screenshot({ path: '/private/tmp/claude-502/-Users-abishaket-Desktop-personal/4eb3826d-6e12-47fe-9ff7-402a747ee2da/scratchpad/jump-pricing.png' });

console.log('ERRORS:', JSON.stringify(errors));
await browser.close();
