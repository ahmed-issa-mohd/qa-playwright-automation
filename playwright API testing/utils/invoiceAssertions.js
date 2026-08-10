import { expect } from '@playwright/test';


// Verify Invoice Status

export async function verifyInvoiceStatus(responseBody, expectedStatus) {

    expect(responseBody.status)
        .toBe(expectedStatus);

}


// Verify Invoice XML Exists

export async function verifyInvoiceXML(responseBody) {

    expect(responseBody.invoiceXml)
        .toBeTruthy();

}


// Verify No Errors Returned

export async function verifyNoErrors(responseBody) {

    expect(responseBody.errors)
        .toBeFalsy();

}