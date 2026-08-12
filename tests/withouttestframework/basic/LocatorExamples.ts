import { Browser, BrowserContext, chromium, firefox, Locator, Page } from "@playwright/test";

//A Locator in Playwright is used to find and interact with elements on a web page.
//Playwright locators are auto-waiting, meaning they automatically wait for elements to be visible, enabled, and ready before performing actions.


//HTML : Hypertext Markup Language used for static webpage development
//CSS  :  used for design web pages
//Javascript : Used for developed dyanamic web pages


async function locatorExample() : Promise<void> {

        let browser : Browser = await chromium.launch({
            headless: false
        });

        let context : BrowserContext = await browser.newContext();
        let page : Page = await context.newPage();

        //1. Id Locator
        // Id Locator we can locate with CSS Selector
        //Playwright bydefault support for CSS Selector
        //In a CSS Language id attribute replace by #
         // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
        // const userNameTextBox : Locator = await page.locator('#login1');
        // await userNameTextBox.fill('Arpit Kumar');


        //2. class Locator
        //In css language class attribute replace by .
        //  await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
        // const userNameTextBox : Locator = await page.locator('.email-input');
        // await userNameTextBox.fill('Arpit Kumar');

        //3. CSS Selector
        //  await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
        // const userNameTextBox : Locator = await page.locator("input[id='login1']");
        // await userNameTextBox.fill('Arpit Kumar');

        //4. nth() locator
        //Used when multiple elements match the same locator and you want a specific index element.
         //await page.goto('https://www.letskodeit.com/practice');
         //await page.locator('.inputs').nth(1).fill('Test Data')

         //first() Locator
        //Selects the first matching element.
        // await page.goto('https://www.letskodeit.com/practice');
        //  await page.locator('.inputs').first().fill('Test Data')

        //last() Locator
        //Selects the last matching element.
        // await page.goto('https://www.letskodeit.com/practice');
        //  await page.locator('.inputs').last().fill('Test Data')

        //hasText() Locator
        //Find elements that contain specific text inside them.
        // await page.goto('https://www.letskodeit.com/practice');
        //  await page.locator("button:has-text('Open Window')").click();

         //and() Locator : Combine multiple locators together.
    //    await page.goto('https://www.letskodeit.com/practice');
    //      await page.locator("button:has-text('Open Window')").and(page.locator('#openwindow')).click();

        //or() Locator : Combine multiple locators together.
        // await page.goto('https://www.letskodeit.com/practice');
        //  await page.locator("button:has-text('Open Window')").or(page.locator('#openwindow')).click();

        
        //getByText()
        //Find an element by visible text
        // await page.goto('https://www.letskodeit.com/practice');
        // await page.getByText('Open Window').click();


        //getByPlaceholder()
        //find an input bt its placeholder
        // await page.goto('https://www.letskodeit.com/practice');
        // await page.getByPlaceholder('Enter Your Name').fill('Kartik Shende');


        //getByTitle()
        //Find an element using the title
        // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
        // await page.getByTitle('3rd party ad content').click();


        //xpath

        //1. Absolute xpath
        // It is the direct way to find the element
        // The key characteristic of XPath is that it begins with the single forward slash(/).
        // which means you can select the element from the root node.
        //Ex. /html/body/div[1]/div[2]/div[2]/div/div/div/div/div[2]/div[3]/fieldset/input

        //2. Relative xpath
        // It always starts with middle of DOM structure
        // RX always start with "(//)" 
        // RX always recommandable to use
        //Example of RX (//input[@id='autosuggest'])

        //basic of RX
        //await page.goto('https://www.letskodeit.com/practice');
         //await page.locator("//input[@id='autosuggest']").fill('Test Data')
         //await page.locator("//input[@placeholder='Start Typing...']").fill('Test Data')

         //XPath Text() Function
         await page.goto('https://www.peoplenexusai.com/');
        // await page.locator("//a[text()='Get a new Rediffmail ID']").click();

         //and()/or() condition
         //input[@id='login1' and @class='email-input']
         //input[@id='login1' or @class='email-inpu']


         //Starts-with()
         //a[starts-with(text(),'Get a')]
         //input[starts-with(@type,'pass')]

         //contains()
         //a[contains(text(),'got')]
         //input[contains(@class,'trol')]

         //xpath axes
        //These XPath axes methods are used to find the complex or dynamic elements.

        //1. Following
        //Selects all elements in the document of the current node()
        //await page.waitForTimeout(2000);
        // await page.locator('.features-link ').click();
        // //await page.waitForTimeout(3000);
        // const elements = await page.locator("//div[@class='features-categories-list ']//following::div").textContent();
        //  await page.waitForTimeout(3000);
        //  //console.log(await elements.count());
        //  console.log(await elements);

        //2. ancestor
        //The ancestor axis selects all ancestor's element
        //input[@id='login1']//ancestor::div

        //3. Child : Selects all children elements of the current node 
        //input[@id='login1']//child::div 

        //4. Following-sibling : Select the following siblings of the context node. 
        //input[@id='login1']//following-sibling::div

        //5. Parent : Selects the parent of the current node.
        //input[@id='login1']//parent::div

        //6. Descendant : Fetch current node child and grand child
        //  (//div[@class='email-input-container'])[1]//descendant::input

        page.close();
        context.close();
        browser.close();

}

locatorExample();