import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { UserPage } from '../pages/UserPage';
import { LeftHandNavigation } from '@pages/LeftHandNavigation';
import { PimPage } from '@pages/PimPage';

type PomFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    userPage: UserPage;
    leftHandNavigationPage: LeftHandNavigation;
    pimPage: PimPage;
};

export const test = baseTest.extend<PomFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },
    userPage: async ({ page }, use) => {
        const userPage = new UserPage(page);
        await use(userPage);
    },
    leftHandNavigationPage: async ({ page }, use) => {
        const leftHandNavigationPage = new LeftHandNavigation(page);
        await use(leftHandNavigationPage);
    },
    pimPage: async ({ page }, use) => {
        const pimPage = new PimPage(page);
        await use(pimPage);
    }
});