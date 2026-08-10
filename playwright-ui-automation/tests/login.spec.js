import { test, expect } from '../fixtures/pageFixture';

import {
    validLogin,
    invalidLogin,
    emptyLogin
} from '../data/loginData';

test.describe('Login Tests', () => {

    // 1. Positive - Valid Credentials
    test('Positive Login', async ({ loginPage }) => {

        await loginPage.open();

        await loginPage.login(
            validLogin.username,
            validLogin.password
        );

        await expect(loginPage.page).toHaveURL(/inventory.html/);

    });


    // 2. Negative - Invalid Credentials
    test('Negative Login', async ({ loginPage }) => {

        await loginPage.open();

        await loginPage.login(
            invalidLogin.username,
            invalidLogin.password
        );

        await expect(loginPage.errorMessage).toBeVisible();

    });


    // 3. Positive - Press Enter
    test('Positive Login - Press Enter', async ({ loginPage }) => {

        await loginPage.open();

        await loginPage.login(
            validLogin.username,
            validLogin.password
        );

        await loginPage.page.keyboard.press('Enter');

        await expect(loginPage.page).toHaveURL(/inventory.html/);

    });


    // 4. Negative - Empty Credentials
    test('Negative Login - Empty Credentials', async ({ loginPage }) => {

        await loginPage.open();

        await loginPage.login(
            emptyLogin.username,
            emptyLogin.password
        );

        await expect(loginPage.errorMessage).toBeVisible();

    });


    // 5. Negative - Invalid Username and Valid Password
    test('Negative Login - Invalid Username', async ({ loginPage }) => {

        await loginPage.open();

        await loginPage.login(
            invalidLogin.username,
            validLogin.password
        );

        await expect(loginPage.errorMessage).toBeVisible();

    });

});