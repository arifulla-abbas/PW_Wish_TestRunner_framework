import { Page, Locator } from '@playwright/test';

export class PimPage {
    readonly page: Page;
    readonly addPimButton: Locator;
    readonly firstNameTextbox: Locator;
    readonly middleNameTextbox: Locator;
    readonly lastNameTextbox: Locator;
    readonly saveButton: Locator;
    readonly newEmployeeHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addPimButton = this.page.getByRole('button', { name: ' Add' });
        this.firstNameTextbox = this.page.getByPlaceholder('First Name');
        this.middleNameTextbox = this.page.getByPlaceholder('Middle Name');
        this.lastNameTextbox = this.page.getByPlaceholder('Last Name');
        this.saveButton = this.page.getByRole('button', { name: 'Save' });
        this.newEmployeeHeader = this.page.locator('.orangehrm-edit-employee-name');
    }
    
    /**
     * To add a new employee in PIM module
     * @param firstName 
     * @param middleName 
     * @param lastName 
     */

    async addEmployee(firstName: string, middleName: string, lastName: string) {
        await this.addPimButton.click();
        await this.firstNameTextbox.fill(firstName);
        await this.middleNameTextbox.fill(middleName);
        await this.lastNameTextbox.fill(lastName);
        await this.saveButton.click();
    }
}