import { test, expect } from '../fixtures/hooks-fixture';
import loginModuleData from '../test-data/login-module-data.json';


test.use({
    storageState: {
        cookies: [],
        origins: []
    }
})

test.describe('Login Module - Negative Scenarios', { tag: '@Negative', annotation: { type: 'Test Suite Link', description: 'JIRA link: ORANGEHRM-2000' } }, () => {

    test('[Login]Verify that user cannot login with invalid password', { tag: ['@UI', '@UAT'], annotation: { type: 'Test Case Link', description: 'JIRA link: ORANGEHRM-2001' } }, async ({ gotoOrangeHRM, loginPage, commonUtils }) => {
        const username = commonUtils.decryptData(process.env.USER_NAME!);
        await loginPage.loginToOrangeHRM(username, loginModuleData.invalid_password);
        await expect(loginPage.invalidCredentialsErrorMessage).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.usernameInput).toBeVisible();
    });

    test('[Login]Verify that user cannot login with invalid username', { tag: ['@UI', '@UAT'], annotation: { type: 'Test Case Link', description: 'JIRA link: ORANGEHRM-2002' } }, async ({ gotoOrangeHRM, loginPage, commonUtils }) => {
        const password = commonUtils.decryptData(process.env.PASSWORD!);
        await loginPage.loginToOrangeHRM(loginModuleData.invalid_username, password);
        await expect(loginPage.invalidCredentialsErrorMessage).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.usernameInput).toBeVisible();
    });

    test('[Login]Verify that user cannot login with invalid username & invalid password', { tag: ['@UI', '@UAT', '@DEV'], annotation: { type: 'Test Case Link', description: 'JIRA link: ORANGEHRM-2003' } }, async ({ gotoOrangeHRM, loginPage, commonUtils }) => {
        await loginPage.loginToOrangeHRM(loginModuleData.invalid_username, loginModuleData.invalid_password);
        await expect(loginPage.invalidCredentialsErrorMessage).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.usernameInput).toBeVisible();
    });
});

test.describe('Login Module - Positive Scenario or Happy path', { tag: '@Positive', annotation: { type: 'Test Suite Link', description: 'JIRA link: ORANGEHRM-1000' } }, () => {
    test('[Login]Verify that the user can login with valid username & password', { tag: ['@VISUAL', '@UAT'], annotation: { type: 'Test Case Link', description: 'JIRA link: ORANGEHRM-1001' } }, async ({ gotoOrangeHRM, loginPage, commonUtils, leftHandNavigationPage }) => {
        const username = commonUtils.decryptData(process.env.USER_NAME!);
        const password = commonUtils.decryptData(process.env.PASSWORD!);
        await loginPage.loginToOrangeHRM(username, password);
        await expect(leftHandNavigationPage.orangeHRMLogo).toHaveScreenshot('OrangeHRMLogo.png');
        await expect(leftHandNavigationPage.leftHandNavigationPanel).toHaveScreenshot('LeftHandNavigationPanel.png');
    });
});