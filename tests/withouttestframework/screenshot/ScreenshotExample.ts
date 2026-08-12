import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function screenshotExample() {

    let browser: Browser = await chromium.launch({
        headless: false
    });

    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    await page.goto('https://www.letskodeit.com/practice');

    //capture full page screenshot
    // await page.screenshot({
    //     path: 'D:/Diagram.png',
    //     fullPage: true
    // })


    //capture focus page screenshot
    // await page.screenshot({
    //     path: 'D:/Diagram.png',
    //     fullPage: false
    // })

    const element = page.locator('#openwindow');
    const time = Date.now();
    await page.screenshot({
        path: `D:/Diagram_${time}.png`,
        fullPage: true
    })

    //Take a screenshot of single element
    //     await element.screenshot({
    //     path: 'D:/Diagram.png',
    // })
}

screenshotExample();