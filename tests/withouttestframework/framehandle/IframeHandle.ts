

import { Browser, BrowserContext, chromium, Page } from "@playwright/test";



async function keyboardBasedExample() {

    let browser: Browser = await chromium.launch({
        headless: false
    });

    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    await page.goto('https://jqueryui.com/datepicker/');

    await page.waitForTimeout(2000);

    //select frame by locator
    //1. frameLocator()
    const frame = page.frameLocator('.demo-frame');
    await frame.locator('.hasDatepicker').click();

    //await page.locator('.hasDatepicker').click();

    //Get all available frame
    // await page.waitForTimeout(2000);
    // const f = page.frames();
    // console.log(f.length);
}

keyboardBasedExample();