// import { test, expect, request } from "@playwright/test";

// test('Verify post api to create booking', async({request}) => {

//     const url = 'https://restful-booker.herokuapp.com/booking';
//     const method = 'POST';
//     const headers = {
//         Accept : 'application/json'
//     };
//     const body = {
//     firstname : "Shanta",
//     lastname : "Brown",
//     totalprice : 111,
//     depositpaid : true,
//     bookingdates : {
//         checkin : "2018-01-01",
//         checkout : "2019-01-01"
//     },
//     "additionalneeds" : "Breakfast"
// }

//     console.log('===============REQUEST================');
//     console.log('Method        : ', method);
//     console.log('URL           : ', url);
//     console.log('Headers       : ', headers);
//     console.log('Request Body  : ', JSON.stringify(body));

//     const response = await request.post(url, {
//         headers,
//         data: body
//     });

//     console.log('===============RESPONSE================');
//     console.log('status       : ', response.status());
//     console.log('URL       : ', response.statusText());
//     console.log('body       : ', await response.json());


//     expect(response.ok()).toBeTruthy();
//     const apiResponse = await response.json();
//     expect(apiResponse.booking.firstname).toBe('Shanta');
// });