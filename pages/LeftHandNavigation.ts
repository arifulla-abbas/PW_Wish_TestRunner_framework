import { Page, Locator } from '@playwright/test';

export class LeftHandNavigation {
    readonly page: Page;
    readonly pimLink: Locator;
    readonly orangeHRMLogo: Locator;
    readonly leftHandNavigationPanel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pimLink = this.page.getByRole('menuitem', { name: 'PIM' });
        this.orangeHRMLogo = this.page.getByAltText('client brand banner').first();
        this.leftHandNavigationPanel = this.page.locator('div.oxd-sidepanel-body');
    }

    /**
     * To open PIM module by clicking on PIM link in left hand navigation
     */
    async clickPimLink() {
        // Wait for dashboard load first
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForSelector('[class*="oxd-main-menu"]', { state: 'visible', timeout: 20000 });

        // Fallback locators: text first (most reliable for OrangeHRM)
        const pimLink = this.page.getByText('PIM', { exact: true }).first();
        await pimLink.waitFor({ state: 'visible', timeout: 15000 });
        await pimLink.click();

        await this.page.waitForURL(/pim/, { timeout: 10000 });
    }

}