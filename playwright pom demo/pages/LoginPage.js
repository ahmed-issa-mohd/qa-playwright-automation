class LoginPage {

    constructor(page) {

        this.page = page;

        // URL
        this.url = 'https://the-internet.herokuapp.com/login';


        // Locators
        this.usernameInput = page.locator('#username');

        this.passwordInput = page.locator('#password');

        this.loginButton = page.getByRole('button', { name: 'Login' });

    }


    // Open Login Page
    async navigate() {

        await this.page.goto(this.url);

    }


    // Login Action
    async login(username, password) {

        await this.usernameInput.fill(username);

        await this.passwordInput.fill(password);

        await this.loginButton.click();

    }

}


export { LoginPage };