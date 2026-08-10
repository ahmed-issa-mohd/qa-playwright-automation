import { test as base } from '@playwright/test';
import { InvoiceAPI } from '../api/InvoiceAPI';


export const test = base.extend({

    invoiceAPI: async ({ request }, use) => {


        const invoiceAPI = new InvoiceAPI(request);


        console.log("Invoice API Fixture Created");


        await use(invoiceAPI);

    },


});


export { expect } from '@playwright/test';