import {test, expect} from "@playwright/test";

//Data Driven using Json of Object

import loginData from "../../../logindata/loginwithscenario.json";


test(`verify sauce demo application with ${loginData.validLogin}`, async ({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Username').fill(loginData.validLogin.username);
    await page.getByPlaceholder('Password').fill(loginData.validLogin.password);
    await page.locator('#login-button').click();
    await page.waitForTimeout(3000);
    const name = await page.locator("//span[text()='Products']");
    await expect(name).toBeVisible();

});



test(`verify sauce demo application with invalid ${loginData.invalidData}`, async ({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Username').fill(loginData.invalidData.username);
    await page.getByPlaceholder('Password').fill(loginData.invalidData.password);
    await page.locator('#login-button').click();
    await page.waitForTimeout(3000);
   await expect(page.locator("//h3[@data-test='error']")).toBeVisible();
    
});





