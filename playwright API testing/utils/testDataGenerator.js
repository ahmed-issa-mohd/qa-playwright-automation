// Generate Unique UUID
export function generateUUID() {

    return crypto.randomUUID();

}



// Generate Unique Invoice ID
export function generateInvoiceID() {

    return "AE-DEV-T-" + Date.now();

}



// Generate Customer Registration Name

export function generateRegistrationName() {


    const timePart = Date.now()
        .toString()
        .slice(-2);


    return "Ahmed Sandoqah Trading 1" + timePart;

}