import { test } from '../fixtures/invoiceFixture';
import { createInvoiceData } from '../data/invoiceData';

import {
    verifyStatusCode,
} from '../utils/apiAssertions';

import {
    verifyInvoiceStatus,
    verifyInvoiceXML,
    verifyNoErrors
} from '../utils/invoiceAssertions';


test.describe('Invoice API Testing', () => {

    test('Create Invoice API Request', async ({ invoiceAPI }) => {

        const invoice = createInvoiceData();

        const response = await invoiceAPI.createInvoice(invoice);

        const responseBody = await response.json();

        console.log("Status Code:", response.status());

        console.log("Response:");
        console.log(JSON.stringify(responseBody, null, 2));


        // Success Scenario
        if (response.status() === 200) {

            await verifyInvoiceStatus(
                responseBody,
                'Cleared'
            );

            await verifyInvoiceXML(
                responseBody
            );

            await verifyNoErrors(
                responseBody
            );

            console.log("Invoice Created Successfully");

        }


        // Rejected Scenario
        else if (response.status() === 400) {

            console.log("Invoice Rejected");

            console.log("Reason:");

            if (responseBody.errors) {

                responseBody.errors.forEach(error => {

                    console.log(error.message);

                });

            } else {

                console.log(
                    "No error details were returned by the API."
                );

            }

        }


        else {

            throw new Error(
                `Unexpected Status Code: ${response.status()}`
            );

        }

    });

});