

import {test, expect, Browser, BrowserContext,chromium } from "@playwright/test";


test('verify payment', async ({page}) =>{

    //without fixture
    let browser: Browser = await chromium.launch({
        headless: false
    });

    let context: BrowserContext = await browser.newContext();
    await context.newPage();
    await page.goto('https://www.letskodeit.com/practice');


    //with fixture
     //await page.goto('https://www.letskodeit.com/practice');
});
