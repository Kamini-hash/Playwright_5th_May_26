import { Browser, BrowserContext, chromium, Page } from "@playwright/test";



async function dropDownExample() {

    let browser: Browser = await chromium.launch({
        headless: false
    });

    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();
    await page.goto('https://www.letskodeit.com/practice');

    //Fetch all option of dropdown
    // const options = await page.locator('#carselect').allTextContents();
    // for (const c of options){
    //       console.log(c);
    // }

    //select by value
    //await page.locator('#carselect').selectOption('Honda');

    //await page.waitForTimeout(3000);

    //Select by Visible Text 
    // await page.locator('#carselect').selectOption({
    //     label: 'Benz'
    // });

    //await page.waitForTimeout(3000);

    //Select by Index 
    // await page.locator('#carselect').selectOption({
    //     index: 0
    // });

    //Get the selected value
    // const value = await page.locator('#carselect').inputValue();
    // console.log(value);


    //Multi select dropdown
    await page.locator('#multiple-select-example').selectOption([
        'orange',
        'peach',
        'apple'
    ])
}


dropDownExample();