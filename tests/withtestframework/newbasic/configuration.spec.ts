import {test, expect } from "@playwright/test";


test('verify payment', async ({page}) =>{
    page.goto('/career')
    await page.waitForTimeout(5000);
    await expect(true).toBe(false);
});

test('verify cashback offer', async ({page}) =>{
    //await expect(true).toBe(true);
    page.goto('/our-culture')
    await page.waitForTimeout(5000);
});