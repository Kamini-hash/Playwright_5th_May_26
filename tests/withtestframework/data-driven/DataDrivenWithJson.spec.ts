import {test, expect} from "@playwright/test";

//Data Driven using Json of Object

import loginData from "../../../logindata/login.json";

for (const data of loginData){
test(`verify sauce demo application ${data.tag}, ${data.username}, ${data.password}`, async ({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await page.getByPlaceholder('Username').fill(data.username);
    await page.getByPlaceholder('Password').fill(data.password);
    await page.locator('#login-button').click();
    await page.waitForTimeout(3000);
    if (data.expect == 'sucess') {
        const name = await page.locator("//span[text()='Products']");
        await expect(name).toBeVisible();
    }else{
        await expect(page.locator("//h3[@data-test='error']")).toBeVisible();
    }

});
}
