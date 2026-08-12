import test from "@playwright/test";



test('verify open edso services website', async({page}) =>{
    await page.goto('https://www.edso.in/');

    await page.waitForTimeout(3000);
});

test('verify open tcs services website', async({page}) =>{
    await page.goto('https://www.tcs.com/');

    await page.waitForTimeout(3000);
});

test('verify open peoplenexusai website', async({page}) =>{
    await page.goto('https://www.peoplenexusai.com/');

    await page.waitForTimeout(3000);
});