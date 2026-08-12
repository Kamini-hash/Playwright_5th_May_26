import { Browser, BrowserContext, chromium, firefox, Locator, Page } from "@playwright/test";



async function automaticCodeGen() {
    
  let browser : Browser = await chromium.launch({
                headless: false
    });
    
 let context : BrowserContext = await browser.newContext();
 let page : Page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
}

automaticCodeGen();