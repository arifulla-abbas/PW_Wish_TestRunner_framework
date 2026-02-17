import { test } from '../fixtures/hooks-fixture';
import { expect } from '@playwright/test';

test('Login to OrangeHRM', async ({ dashboardPage, gotoOrangeHRM }) => {
  // logging from fixture - auth.json, which is created in global-setup.ts after successful login
  // Verify successful login by checking a specific element on the dashboard
  await expect(dashboardPage.dashboardTitleText).toHaveText('Dashboard');
});

test('Verify page title', async ({ page, gotoOrangeHRM }) => {
  await expect(page).toHaveTitle('OrangeHRM');
});

test('Verify landing page title', async ({ page, gotoOrangeHRM, logoutOfOrangeHRM }) => {
  await expect(page).toHaveTitle('OrangeHRM');
});