import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function windowHandleExample() {

    let browser: Browser = await chromium.launch({
        headless: false
    });

    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    await page.goto('https://www.letskodeit.com/practice');

    //handle window
    // const [child] = await Promise.all([
    //     context.waitForEvent('page'),
    //     page.locator('#openwindow').click()
    // ]);


    //switch to the tab
    const [child] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('#opentab').click()
    ]);

    //apply wait for new window
    await child.waitForLoadState();

    //perform action on child window
    await child.getByText('INTERVIEW').click();

    //Get Title for Child Window
    console.log(await child.title());

    //close child window
    child.close();

    //swict back to parent window
    await page.bringToFront();

    await page.waitForLoadState();

    await page.locator('.inputs').first().fill('Akash');

}

windowHandleExample();