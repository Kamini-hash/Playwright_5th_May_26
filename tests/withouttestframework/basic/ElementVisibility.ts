import { Browser, BrowserContext, chromium, Page } from "@playwright/test";



async function elementVisibilityExample() {

    let browser: Browser = await chromium.launch({
        headless: false
    });

    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();
    await page.goto('https://www.letskodeit.com/practice');

    // const enableBtn = await page.locator('#enabled-button');
    // const disableBtn = await page.locator('#disabled-button');
    // const textbox = await page.locator('#enabled-example-input');

    // console.log(await textbox.isEnabled());     //true
    // await disableBtn.click();
    // console.log(await textbox.isDisabled()); //true
    // await enableBtn.click();
    // console.log(await textbox.isEnabled()); //true/


    const showBtn = await page.locator('#show-textbox');
    const hideBtn = await page.locator('#hide-textbox');
    const textbox = await page.locator('#displayed-text');

    console.log(await textbox.isVisible());     //true
    await hideBtn.click();
    console.log(await textbox.isHidden());  //true
    await showBtn.click();
    console.log(await textbox.isVisible()); //true
}


elementVisibilityExample();