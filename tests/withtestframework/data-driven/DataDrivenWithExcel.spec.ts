import {test, expect} from "@playwright/test";
import { ExcelReader } from "./ExcelReader";

const loginData = ExcelReader.readExcel('./logindata/LoginData.xlsx', 'loginData');


test(`verify sauce demo application with ${loginData.validLogin}`, async ({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Username').fill(loginData[0].username);
    await page.getByPlaceholder('Password').fill(loginData[0].password);
    await page.locator('#login-button').click();
    await page.waitForTimeout(3000);
    const name = await page.locator("//span[text()='Products']");
    await expect(name).toBeVisible();

});