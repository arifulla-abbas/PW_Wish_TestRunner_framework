import { Page, Locator } from '@playwright/test';

export class LeftHandNavigation {
    readonly page: Page;
    readonly pimLink: Locator;
    readonly orangeHRMLogo: Locator;
    readonly leftHandNavigationPanel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pimLink = this.page.getByRole('link', { name: 'PIM', exact: true }).first();
        this.orangeHRMLogo = this.page.getByRole('link', { name: 'client brand banner' });
        this.leftHandNavigationPanel = this.page.locator('div.oxd-sidepanel-body');
    }

    /**
     * To open PIM module by clicking on PIM link in left hand navigation
     */
    async clickPimLink() {
        await this.page.waitForLoadState('networkidle'); // Wait for network
        await this.page.waitForSelector('[data-testid="menu-pim-view"]', { state: 'visible', timeout: 60000 }); // Fallback robust selector (inspect OrangeHRM)
        await this.pimLink.waitFor({ state: 'visible', timeout: 30000 });
        await this.pimLink.click();
    }

}