
import { Browser, BrowserContext, chromium, firefox, Page } from "@playwright/test";


async function myFirstPlaywrightScript() : Promise<void> {
    
    //this represent browser instannce
    let browser : Browser = await chromium.launch({
        headless: false
    });

    //It is help you to open browser in incognitio mode
    let context : BrowserContext = await browser.newContext();

    //Page is an object of the Page class provided by Playwright
    let page : Page = await context.newPage();

    await page.goto('https://www.edso.in/');

    await browser.close();

} 

myFirstPlaywrightScript();