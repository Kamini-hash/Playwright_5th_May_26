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

    console.log('=============RESPONSE==============');
	console.log('=============Hi Reeyansh==============');
    console.log('status       : ', response1.status());
    console.log('URL       : ', response1.statusText());
    console.log('body       : ', await response1.json());


    expect(response1.ok()).toBeTruthy();
    const apiResponse1 = await response1.json();
    token = apiResponse1.token;
});


test('Verify delete api for booking', async({request}) => {


    const url = 'https://restful-booker.herokuapp.com/booking/5';
    const method = 'DELET';

   const headers = {
        'Content-Type' : 'application/json',
        'Cookie' : `token=${token}`
    };

    console.log('===============REQUEST================');
    console.log('Method        : ', method);
    console.log('URL           : ', url);
    console.log('Headers       : ', headers);

    const response = await request.delete(url, {
        headers,
    });

    console.log('===============RESPONSE================');
    console.log('status       : ', response.status());
    console.log('URL       : ', response.statusText());


    expect(response.status()).toBe(201);
});