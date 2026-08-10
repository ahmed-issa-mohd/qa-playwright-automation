import { expect } from '@playwright/test';


// =======================
// Verify Status Code
// =======================

export async function verifyStatusCode(response, expectedStatus) {

    expect(response.status())
        .toBe(expectedStatus);

}



// =======================
// Verify Response Property Value
// =======================

export async function verifyProperty(responseBody, property, expectedValue) {


    const actualValue = responseBody[property];


    // Handle Number comparison
    if (typeof expectedValue === 'number') {


        expect(Number(actualValue))
            .toBe(expectedValue);


    }
    else {


        expect(actualValue)
            .toBe(expectedValue);


    }

}



// =======================
// Verify Response Array
// =======================

export async function verifyArray(responseBody) {

    expect(Array.isArray(responseBody))
        .toBe(true);

}



// =======================
// Verify Array Has Data
// =======================

export async function verifyArrayNotEmpty(responseBody) {

    expect(responseBody.length)
        .toBeGreaterThan(0);

}