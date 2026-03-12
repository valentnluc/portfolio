import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:4321/portfolio', { waitUntil: 'networkidle0' });
  const types = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.bento-cell')).map(c => c.getAttribute('data-type'));
  });
  console.log("TYPES:", types);
  await browser.close();
})();
