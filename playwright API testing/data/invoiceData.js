import {
    generateUUID,
    generateInvoiceID,
    generateRegistrationName
} from '../utils/testDataGenerator';

export function createInvoiceData() {

    return {
        "uuid": generateUUID(),
        "id": generateInvoiceID(),
        "icv": 6,
        "invoiceDate": "2026-08-10T00:00:00",
        "dueDate": "2026-08-14T00:00:00",
        "invoiceTypeCode": "380",
        "invoiceTypeCodeName": "",
        "note": "",
        "documentCurrencyCode": "AED",
        "taxCurrencyCode": "",
        "currencyExchangeRate": "",
        "profileExecutionID": "00000000",
        "invoiceDocumentReference": "AE-INV-01",
        "invoiceDocumentReferenceDate": "2025-02-07",
        "contractDocumentReference": "",
        "contractDocumentReferenceDescription": "",
        "discrepancyResponseCode": "",
        "invoicePeriod": {
            "startDate": "2026-06-29",
            "endDate": "2026-07-30",
            "descriptionCode": "DLY"
        },
        "sellerSupplierPartyID": "155667745601003",
        "actualDeliveryDate": "2026-01-30T00:00:00",
        "deliveryLocation": {
            "id": "112345679000003",
            "idSchemeID": "0060",
            "address": {
                "streetName": "Khalifa street",
                "additionalStreetName": "Sector 5",
                "cityName": "Abu Dhabi",
                "postalZone": "4123456754",
                "countrySubentity": "AUH",
                "addressLine": "Zone A",
                "countryCode": "AE"
            }
        },
        "deliveryParty": {
            "name": "Receiving Dock"
        },
        "paymentMeansCode": "30",
        "paymentMeansCodeName": "Credit transfer",
        "paymentAccountID": "AE123456789012345678901",
        "paymentAccountIDSchemeID": "IBAN",
        "paymentAccountName": "TechNova LLC",
        "paymentAccountBranchID": "SWIFT-TNS",

        "accountingSupplierParty": {
            "partyIdentificationID": "1002645636",
            "taxIdentificationNumber": "1002645636",
            "endpointSchemeID": "0235",
            "taxNumber": "100264563600003",
            "registrationName": "TechNovaLLC Testing",
            "streetName": "Al Bateen Street",
            "cityName": "Al Bateen Street",
            "postalZone": "4123456754",
            "countrySubentity": "DXB",
            "countryCode": "AE",
            "countryIdentificationCode": "AE",
            "partyIdentificationNumber": "112345678900003",
            "companyIDSchemeAgencyID": "PAS",
            "companyIDSchemeAgencyName": "AE"
        },

        "accountingCustomerParty": {
            "partyIdentificationID": "1testbuyer",
            "taxIdentificationNumber": "1testbuyer",
            "endpointSchemeID": "0235",
            "partyIdentificationNumber": "189098765401003",
            "taxNumber": "100009191912303",
            registrationName: generateRegistrationName(),
            "streetName": "Khalifa street",
            "cityName": "Abu Dhabi",
            "postalZone": "4123456754",
            "countrySubentity": "AUH",
            "countryIdentificationCode": "AE",
            "companyIDSchemeAgencyID": "TL",
            "companyIDSchemeAgencyName": "Trade Authority"
        },

        "allowanceCharges": [
            {
                "chargeIndicator": true,
                "amount": {
                    "value": 100.0,
                    "currency": "AED"
                },
                "invoiceTaxCategoryID": "S",
                "invoiceTaxPercent": 5.0
            },
            {
                "chargeIndicator": false,
                "amount": {
                    "value": 100.0,
                    "currency": "AED"
                },
                "invoiceTaxCategoryID": "S",
                "invoiceTaxPercent": 5.0
            }
        ],

        "taxAmount": {
            "value": 248.0,
            "currency": "AED"
        },

        "taxSubtotals": [
            {
                "taxableAmount": {
                    "value": 4960.0,
                    "currency": "AED"
                },
                "taxAmount": {
                    "value": 248.0,
                    "currency": "AED"
                },
                "taxCategoryID": "S",
                "taxCategoryPercent": 5.0
            }
        ],

        "lineExtensionAmount": {
            "value": 4960.0,
            "currency": "AED"
        },

        "taxExclusiveAmount": {
            "value": 4960.0,
            "currency": "AED"
        },

        "taxInclusiveAmount": {
            "value": 5208.0,
            "currency": "AED"
        },

        "allowanceTotalAmount": {
            "value": 100.0,
            "currency": "AED"
        },

        "chargeTotalAmount": {
            "value": 100.0,
            "currency": "AED"
        },

        "prepaidAmount": {
            "value": 250.0,
            "currency": "AED"
        },

        "payableRoundingAmount": {
            "value": 0.0,
            "currency": "AED"
        },

        "payableAmount": {
            "value": 4958.0,
            "currency": "AED"
        }, "invoiceLines": [
            {
                "id": "1",
                "itemName": "Premium Office Keyboard",
                "itemDescription": "Office keyboard",
                "invoicedQuantityUnitCode": "A18",
                "invoicedQuantity": 5.0,
                "baseQuantity": 1.0,
                "baseQuantityUnitCode": "A18",
                "itemStandardItemIdentification": "04012345123456",
                "additionalItemID": "",
                "additionalItemIDSchemeID": "",
                "originCountryCode": "AE",
                "itemProductTypeCode": "G",
                "natureCode": "",
                "itemClassificationCode": "AA",
                "itemClassificationListID": "HS",
                "itemClassificationListVersionID": "1.0",
                "itemClassifiedTaxCategoryID": "S",
                "itemClassifiedTaxCategoryPercent": 5.0,
                "taxExemptionReasonCode": "",
                "taxExemptionReason": "",
                "additionalItemPropertyName": "Color",
                "additionalItemPropertyValue": "Silver",

                "taxSubtotals": [],

                "allowanceCharges": [
                    {
                        "chargeIndicator": true,
                        "allowanceChargeReasonCode": "",
                        "allowanceChargeReason": "",
                        "amount": {
                            "value": 10.0,
                            "currency": "AED"
                        },
                        "invoiceDiscount": {
                            "value": 10.0,
                            "currency": "AED"
                        }
                    },
                    {
                        "chargeIndicator": false,
                        "allowanceChargeReasonCode": "",
                        "allowanceChargeReason": "",
                        "amount": {
                            "value": 50.0,
                            "currency": "AED"
                        },
                        "invoiceDiscount": {
                            "value": 50.0,
                            "currency": "AED"
                        }
                    }
                ],

                "lineExtensionAmount": {
                    "value": 4960.0,
                    "currency": "AED"
                },

                "priceAmount": {
                    "value": 1000.0,
                    "currency": "AED"
                },

                "priceAllowanceCharges": [
                    {
                        "chargeIndicator": false,
                        "amount": {
                            "value": 100.0,
                            "currency": "AED"
                        },
                        "baseAmount": {
                            "value": 1100.0,
                            "currency": "AED"
                        }
                    }
                ],

                "taxAmount": {
                    "value": 248.0,
                    "currency": "AED"
                },

                "itemPriceExtensionAmount": {
                    "value": 5208.0,
                    "currency": "AED"
                }
            }
        ]
    };
}