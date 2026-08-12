import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function alertHandleHandleExample() {

    let browser: Browser = await chromium.launch({
        headless: false
    });

    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    await page.goto('https://www.letskodeit.com/practice');

    page.on('dialog', async dialog =>{
        console.log(await dialog.type());
        console.log(await dialog.message());
        await dialog.accept();
    })

    await page.locator('#confirmbtn').click();
}

alertHandleHandleExample();