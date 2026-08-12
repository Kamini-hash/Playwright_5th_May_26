import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function uploadFileExample() {

    let browser: Browser = await chromium.launch({
        headless: false
    });

    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    await page.goto('https://the-internet.herokuapp.com/upload');

    await page.locator('#file-upload').setInputFiles('D:/Diagram.png');

    await page.waitForTimeout(3000);

    await page.locator('#file-submit').click();

}


uploadFileExample();