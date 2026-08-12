import test from "@playwright/test";

//1. test.skip() : Used to skip a test execution.
// test.skip('verify test case 2', async({page})=>{
//     console.log('Test Case 2');
// });

//2. test.only() : 
// test.only('verify test case 2', async({page})=>{
//     console.log('Test Case 2');
// });

//3. test.fail() : Marks a test as expected to fail.
// test.fail('verify test case 1', async({page})=>{
//     console.log('Test Case 1');
// });

//4. test.fixme() : Marks test as broken and skips execution. It will be skipped
// test.fixme('verify test case 3', async({page})=>{
//     console.log('Test Case 3');
// });

//5. test.slow() : Triples the test timeout.
//  Does not delay execution. It triples the test timeout, allowing long-running tests to complete without timing out.



test('verify test case 1', async({page})=>{
    console.log('Test Case 1');
});

test('verify test case 2', async({page})=>{
    console.log('Test Case 2');
});

test('verify test case 3', async({page})=>{
    await test.slow();
    console.log('Test Case 3');
});