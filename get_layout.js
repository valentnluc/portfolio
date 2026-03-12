import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 1000 });
  await page.goto('http://localhost:4321/portfolio', { waitUntil: 'networkidle0' });
  const boxes = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.bento-cell')).map(c => ({
      t: c.getAttribute('data-type'), x: c.getBoundingClientRect().x, y: c.getBoundingClientRect().y, w: c.getBoundingClientRect().width, h: c.getBoundingClientRect().height
    }));
  });
  console.log(JSON.stringify(boxes, null, 2));
  await browser.close();
})();
