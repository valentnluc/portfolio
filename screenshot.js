import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:4321/portfolio', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'screenshot_desktop.png' });
  
  await page.setViewport({ width: 800, height: 1000 });
  await page.screenshot({ path: 'screenshot_tablet.png' });
  
  await browser.close();
})();
