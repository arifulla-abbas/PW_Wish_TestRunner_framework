import { Page, Locator } from '@playwright/test';

export class LeftHandNavigation {
    readonly page: Page;
    readonly pimLink: Locator;
    readonly orangeHRMLogo: Locator;
    readonly leftHandNavigationPanel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pimLink = this.page.locator('span:has-text("PIM")');
        this.orangeHRMLogo = this.page.getByAltText('client brand banner').first();
        this.leftHandNavigationPanel = this.page.locator('div.oxd-sidepanel-body');
    }

    /**
     * To open PIM module by clicking on PIM link in left hand navigation
     */
    async clickPimLink() {
        await this.pimLink.click();
    }

}