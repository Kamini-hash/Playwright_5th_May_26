// import { test, expect, request } from "@playwright/test";

// test('Verify Get booking by Id', async({request}) => {

//     const url = 'https://restful-booker.herokuapp.com/booking/1';
//     const method = 'GET';
//     const headers = {
//         Accept : 'application/json'
//     };

//     console.log('===============REQUEST================');
//     console.log('Method       : ', method);
//     console.log('URL       : ', url);
//     console.log('Headers       : ', headers);

//     const response = await request.get(url, {headers});

//     console.log('===============RESPONSE================');
//     console.log('status       : ', response.status());
//     console.log('URL       : ', response.statusText());
//     console.log('body       : ', await response.json());


//     expect(response.ok()).toBeTruthy();
//     const body = await response.json();
//     expect(body.firstname).toBe('Susan');
// });