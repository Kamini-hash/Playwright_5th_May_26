import { test, expect, request } from "@playwright/test";

let token : string;

test.beforeEach(async ({request}) =>{
    const tokenUrl = 'https://restful-booker.herokuapp.com/auth';
    const method1 = 'POST';
    const headers = {
        Accept : 'application/json'
    };
    const body1 = {
    username : "admin",
    password : "password123"
}


    console.log('===============REQUEST================');
    console.log('Method        : ', method1);
    console.log('URL           : ', tokenUrl);
    console.log('Headers       : ', headers);
    console.log('Request Body  : ', JSON.stringify(body1));

    const response1 = await request.post(tokenUrl, {
        headers,
        data: body1
    });

    console.log('===============RESPONSE================');
    console.log('status       : ', response1.status());
    console.log('URL       : ', response1.statusText());
    console.log('body       : ', await response1.json());


    expect(response1.ok()).toBeTruthy();
    const apiResponse1 = await response1.json();
    token = apiResponse1.token;
});


test('Verify put api to update booking', async({request}) => {


    const url = 'https://restful-booker.herokuapp.com/booking/1';
    const method = 'PUT';

    const body = {
    firstname : "Swati",
    lastname : "Brown",
    totalprice : 111,
    depositpaid : true,
    bookingdates : {
        checkin : "2018-01-01",
        checkout : "2019-01-01"
    },
        additionalneeds : "Breakfast"
    };

   const headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Cookie' : `token=${token}`
    };

    console.log('===============REQUEST================');
    console.log('Method        : ', method);
    console.log('URL           : ', url);
    console.log('Headers       : ', headers);
    console.log('Request Body  : ', JSON.stringify(body));

    const response = await request.put(url, {
        headers,
        data: body
    });

    console.log('===============RESPONSE================');
    console.log('status       : ', response.status());
    console.log('URL       : ', response.statusText());
    console.log('body       : ', await response.json());


    expect(response.ok()).toBeTruthy();
    const apiResponse = await response.json();
    expect(apiResponse.firstname).toBe('Swati');
});