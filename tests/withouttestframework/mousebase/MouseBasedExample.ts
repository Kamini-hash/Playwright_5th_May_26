import { Browser, BrowserContext, chromium, Page } from "@playwright/test";



async function mouseBasedExample() {

    let browser: Browser = await chromium.launch({
        headless: false
    });

    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    //await page.waitForTimeout(3000);

    //double click action
    // await page.goto('https://qa-practice.netlify.app/double-click');
    // await page.locator('#double-click-btn').dblclick();

    //right click action
    // await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    // await page.getByText('right click me').nth(0).click({
    //     button: 'right'
    // });


    //Hover Mouse
    // await page.goto('https://www.flipkart.com/');
    // await page.waitForTimeout(3000);
    // await page.getByText('✕').click();
    // await page.waitForTimeout(3000);
    // await page.getByText('Login').hover();


    //Drag and Drop
    // await page.goto('https://selenium08.blogspot.com/2020/01/drag-drop.html');
    // await page.waitForTimeout(3000);
    // await page.locator('#draggable').dragTo(page.locator('#droppable'));

    //Mouse Move
    // await page.goto('https://jqueryui.com/slider/');
    //  await page.waitForTimeout(3000);

    //  const frame = page.frameLocator('.demo-frame');
    //  const slider = frame.locator('#slider span')

    //  const box = await slider.boundingBox();

    //  await page.waitForTimeout(3000);

    //  if (box) {
    //     await page.mouse.move(
    //         box.x + box.width/2,
    //          box.y + box.height/2,
    //     );

    //     await page.mouse.down();

    //         await page.mouse.move(
    //         box.x + 200,
    //          box.y + box.height/2,
    //     );
    //  }

    //  await page.waitForTimeout(3000);

    //  //Scroll Down by mouse wheel
    //  await page.mouse.wheel(0, 2000);

    //  await page.waitForTimeout(3000);
     
    //  await page.mouse.wheel(0, -2000);


    //scroll down by specific element
     await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
     await page.waitForTimeout(3000);

     const element = page.getByText('Disclaimer');

     await element.scrollIntoViewIfNeeded();

    await page.waitForTimeout(3000);

    const element2 = page.getByText('Get a new Rediffmail ID');

     await element2.scrollIntoViewIfNeeded();

}

mouseBasedExample();