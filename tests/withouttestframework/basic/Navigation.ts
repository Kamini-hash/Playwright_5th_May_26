import { Browser, BrowserContext, chromium, Page } from "@playwright/test";



async function navigationExample() {
    
  let browser : Browser = await chromium.launch({
                headless: false
    });
    
 let context : BrowserContext = await browser.newContext();
 let page : Page = await context.newPage();
  await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');

  await page.getByText('Forgot password?').click();

  await page.waitForTimeout(3000);

  await page.goBack();

  await page.waitForTimeout(3000);

  await page.goForward();

  await page.waitForTimeout(3000);

  await page.reload();
}


navigationExample();