export class InvoiceAPI {

    constructor(request) {

        this.request = request;

        this.baseURL = 'https://192.168.0.15/MiZatca/api';

    }


    // Create Invoice
    async createInvoice(invoiceData) {

        return await this.request.post(
            `${this.baseURL}/Invoice/einvoice`,
            {
                data: invoiceData,
                headers: {
                    "TerminalToken": "-61865448925571314786565773835982689816",
                    "Content-Type": "application/json"
                }
            }
        );

    }

}