import { test as baseTest } from './common-fixture';

type HooksFixtures = {
    gotoOrangeHRM: any;
    logoutOfOrangeHRM: any;
};

export const test = baseTest.extend<HooksFixtures>({
    gotoOrangeHRM: async ({ loginPage }: any, use: any) => {
        await loginPage.navigateToLoginPage();
        await use();
    },
    logoutOfOrangeHRM: async ({ userPage }: any, use: any) => {
        await use();
        await userPage.logout();
    }
});

export { expect } from '@playwright/test';

