import {test, expect} from "@playwright/test";

//Componant of test case
//Summery, Prerequisite, Execution steps, test data, expected result

//1. Hard Asserion
//2. Soft Assertion


//1. Hard Asserion
// When our script is fail on that statement your script will terminate

// test('verify sauce demo application 1', async ({page}) =>{

//     await page.goto('https://www.saucedemo.com/');

//     await expect(page).toHaveTitle('Swag Lab');
//     await page.getByPlaceholder('Username').fill('standard_user');
//     await page.getByPlaceholder('Password').fill('secret_sauce');
//     await page.locator('#login-button').click();
//     await page.waitForTimeout(3000);

//     const name = await page.locator("//span[text()='Products']");

//     await expect(name).toBeVisible();
// });


//2. Soft Assertion

// test('verify sauce demo application 2', async ({page}) =>{

//     await page.goto('https://www.saucedemo.com/');

//     await expect.soft(page).toHaveTitle('Swag Lab');
//     await page.getByPlaceholder('Username').fill('standard_user');
//     await page.getByPlaceholder('Password').fill('secret_sauce');
//     await page.locator('#login-button').click();
//     await page.waitForTimeout(3000);
//     const name = await page.locator("//span[text()='Products']");
//     await expect.soft(name).toBeVisible();
// });

