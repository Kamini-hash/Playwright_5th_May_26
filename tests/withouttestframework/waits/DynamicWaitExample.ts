import { Browser, BrowserContext, chromium, Page } from "@playwright/test";



async function dynamicWaitDemoExample() {

    let browser: Browser = await chromium.launch({
        headless: false
    });

    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    await page.goto('https://demoqa.com/dynamic-properties');

    //waitFor()
    await page.locator('#visibleAfter').waitFor({state : 'visible'});
    console.log(await page.locator('#visibleAfter').isVisible());

    await page.waitForLoadState('load');



}


dynamicWaitDemoExample();