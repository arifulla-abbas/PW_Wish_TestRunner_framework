import { test } from '../fixtures/common-fixture';

test('Global Setup', async ({ page, loginPage, commonUtils }) => {
    const decryptedUsername = commonUtils.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);

    await loginPage.navigateToLoginPage();
    await loginPage.loginToOrangeHRM(decryptedUsername, decryptedPassword);
    await page.waitForURL(`${process.env.BASE_URL}web/index.php/dashboard/index`);

    // to save the storage state after login, which can be used in other tests to bypass login
    await page.context().storageState({ path: './playwright/.auth/auth.json' });
});