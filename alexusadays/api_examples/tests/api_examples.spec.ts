import { test, expect } from '@playwright/test';
import users from '../test-data/usersResponse.json';

test.describe('API Verification examples', () => {
    // 1) Test to verify users endpoint is return expected users
    test('Verify multiple records returned against stored static response', async ({ request }) => {
        // save raw response into variable
        const response = await request.get("https://reqres.in/api/users?page=1")

        // parse the response body into a JS object with access to the actual data within the response body
        const responseBody = await response.json();

        // Let's see what is stored inside
        //console.log(responseBody);

        expect(response.status()).toBe(200);
        expect(responseBody).toEqual(users);
    });

    // 2) Test data for a single user line by line
    test('Verify a single user line by line', async ({ request }) => {
        const response = await request.get("https://reqres.in/api/users/1")
        const responseBody = await response.json()
        // console.log(responseBody);


        // Assert users information
        expect(responseBody.data.id).toBe(1)
        expect(responseBody.data.email).toBe('george.bluth@reqres.in')
        expect(responseBody.data.first_name).toBe('George')
        expect(responseBody.data.last_name).toBe('Bluth')
        expect(responseBody.data.avatar).toBe('https://reqres.in/img/faces/1-image.jpg')
    });

    // 3) Test for POST request
    test('Verify POST request', async ({ request }) => {
        const newUser = {
            name: 'Sam',
            job: 'QA'
        }

        // Create request
        const response = await request.post("https://reqres.in/api/users", {
            data: newUser,
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
        // Parse response
        const responseBody = await response.json()
        //console.log(responseBody);

        // Assert users information
        expect(response.status()).toBe(201)
        expect(responseBody.name).toBe(newUser.name)
        expect(responseBody.job).toBe(newUser.job)
    });

    // 4) Verify PUT request
    test('Verify PUT request', async ({ request }) => {
        const updateUser = {
            name: 'Mr. Banana',
            job: 'SDET'
        }

        const response = await request.put("https://reqres.in/api/users/1", {
            data: updateUser,
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
        const responseBody = await response.json()
        //console.log(responseBody);

        // Assert users information
        expect(response.status()).toBe(200)
        expect(responseBody.name).toBe(updateUser.name)
        expect(responseBody.job).toBe(updateUser.job)

    });

    // 5) Verify DELETE request
    test('Verify DELETE request', async ({ request }) => {
        const response = await request.delete("https://reqres.in/api/users/2", {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
        //console.log(response);
        expect(response.status()).toBe(204)

    });

});
