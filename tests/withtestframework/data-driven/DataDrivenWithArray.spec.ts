import {test, expect} from "@playwright/test";

//Data Driven using Array of Object


const loginData = [
    {
        username: "standard_user",
        password: "secret_sauce",
        expect: "sucess",
        tag : "@positive",
        check: "testtoo"
    },
        {
        username: "standard_user",
        password: "secret",
        expect: "fail",
        tag : "@negative",
        check: "testtoo987"
    },
        {
        username: "user",
        password: "secret_sauce",
        expect: "fail",
        tag : "@negative",
        check: "testtoo54"
    },
        {
        username: "standard",
        password: "secret",
        expect: "fail",
        tag : "@negative",
        check: "testtoo123"
    },
]

for (const data of loginData){
test(`verify sauce demo application ${data.tag}, ${data.username}, ${data.password}`, async ({page}) =>{
    test.skip(data.tag == "@negative", `Login ${data.username}`);
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
