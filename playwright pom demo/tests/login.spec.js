import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';


test('Verify user can login successfully', async ({ page }) => {


    // Create Login Page object
    const loginPage = new LoginPage(page);


    // Open Login Page
    await loginPage.navigate();


    // Perform Login
    await loginPage.login(
        'tomsmith',
        'SuperSecretPassword!'
    );


    // Verify Login Success
    await expect(page.locator('#flash'))
        .toContainText('You logged into a secure area!');


});