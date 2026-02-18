import { test, expect } from '../fixtures/hooks-fixture';
import pimModuleData from '../test-data/pim-module-data.json';

test('[PIM]Verify that a new employee is successfully created under the PIM module',
    { tag: ['@UI', '@UAT'], annotation: { type: 'Test Case Link', description: 'JIRA link: ORANGEHRM-1004' } }, async ({ gotoOrangeHRM, leftHandNavigationPage, pimPage }) => {
    await test.step('Open PIM module', async () => {
        await leftHandNavigationPage.clickPimLink();
    });

    await test.step('Add new employee in PIM module', async () => {
        await pimPage.addEmployee(pimModuleData.first_name, pimModuleData.middle_name, pimModuleData.last_name);
    });

    await test.step('Verify new employee is created in PIM module', async () => {
        await expect(pimPage.newEmployeeHeader).toHaveText(`${pimModuleData.first_name} ${pimModuleData.last_name}`);
    });
});