import test from "@playwright/test";

test.describe("Verify Parallel Execution", ()=>{

    test.describe.configure({mode: 'parallel'});

    test('login', async({page}) =>{
        console.log('Login');
    });

        test('sign up', async({page}) =>{
        console.log('sign up');
    });

        test('forgot password', async({page}) =>{
        console.log('Forgot Password');
    });
})

test.describe("Verify serial Execution", ()=>{

    test.describe.configure({mode: 'serial'});

    test('Search', async({page}) =>{
        console.log('search');
    });

        test('Add to card', async({page}) =>{
        console.log('add to kard');
    });

})
