import test from "@playwright/test";


test.afterEach(async ()=>{
    console.log('After Each Test');

})

test.beforeEach(async ()=>{
    console.log('Before Each Test 1');
})

test.beforeEach(async ()=>{
    console.log('Before Each Test 2');
})

test('verify rediffmail website', async({page})=>{
    console.log('Rediffmail');
});

test('verify Google website', async({page})=>{
    console.log('Google');
});

test('verify amazon website', async({page})=>{
    console.log('Amazon');
});

test.afterAll(async ()=>{
    console.log('After All');
})

test.beforeAll(async ()=>{
    console.log('Before All');
})