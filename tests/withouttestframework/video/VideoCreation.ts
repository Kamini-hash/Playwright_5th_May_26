import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

async function videoCreationExample() {

    let browser: Browser = await chromium.launch({
        headless: false
    });

    let context: BrowserContext = await browser.newContext({
        recordVideo: {
            dir: 'D:/classes',
            size:{
                width: 1200,
                height: 1000
            }
        }
    });



    let page: Page = await context.newPage();

    await page.goto('https://www.letskodeit.com/practice');
    
    // await page.locator('.inputs').nth(0).fill('Arpit');

    // //Ctrl+A
    await page.locator('.inputs').nth(0).click();
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(3000);

    //   //Ctrl+C
    await page.keyboard.press('Control+C');
    await page.waitForTimeout(3000);


    // //Control+V
      await page.locator('.inputs').nth(2).click();
      await page.keyboard.press('Control+V');


    //       //Delete text
    //   await page.keyboard.press('Control+A');
    //    await page.keyboard.press('Delete');

    //  await page.waitForTimeout(3000);
    //   //Delete text with backspace
      await page.keyboard.press('Control+A');
       await page.keyboard.press('Backspace');


}

videoCreationExample();