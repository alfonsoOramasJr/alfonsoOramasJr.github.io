const puppeteer = require('puppeteer-core');
const assert = require('assert');

async function setLinkTargetBasedOnView() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 600, height: 800 });
  await page.evaluate(() => {
    document.getElementsByClassName("top-navigation-link")[0].target = "_self";
  });

  const mobileResult = await page.evaluate(() => setLinkTargetBasedOnView());
  assert.strictEqual(mobileResult, "mobile-view-detected");

  await page.setViewport({ width: 1024, height: 768 });
  await page.evaluate(() => {
    document.getElementsByClassName("top-navigation-link")[0].target = "_blank";
  });

  const desktopResult = await page.evaluate(() => setLinkTargetBasedOnView());
  assert.strictEqual(desktopResult, "desktop-view-detected");

  await browser.close();
}

setLinkTargetBasedOnView();
