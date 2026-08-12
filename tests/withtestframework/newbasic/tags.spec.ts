import test from "@playwright/test";

//tags
//Playwright supports a dedicated tag property

//test.describe() is used to group related test cases together

test('Verify Amazon application', {tag: '@testCheck'}, async({page}) => {
        console.log('Amazon Application');
});

test('Verify Flipkart application @smoke', async({page}) => {
        console.log('Flipkart Application');
});

test('Verify Google application @regression @p0', async({page}) => {
        console.log('Google Application');
});


test.describe('Sanity all test cases @sanity', ()=>{

    test('Verify Edso application', async({page}) => {
        console.log('Edso Application');
});

test('Verify Edso Learn application', async({page}) => {
        console.log('Edso Learn Application');
});

})
