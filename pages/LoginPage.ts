import { Page, Locator } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly invalidCredentialsErrorMessage: Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.invalidCredentialsErrorMessage = page.getByRole('alert').locator('p');
    }

    /**
     * Navigate to the login page of OrangeHRM
     */
    async navigateToLoginPage() {
        //await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await this.page.goto(`${process.env.BASE_URL}web/index.php/auth/login`);
    }

    /**
     * Perform login action with the provided username and password
     * @param username - The username to log in with
     * @param password - The password to log in with
     */
    async loginToOrangeHRM(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}