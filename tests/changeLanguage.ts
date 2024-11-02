import { Page, Locator, expect } from "@playwright/test";

export class LanguagePage {
    private page: Page;
    private languageButton: Locator;
    private language: Locator;
    private saveChanges: Locator;

    constructor(page: Page) {
        this.page = page;
        this.languageButton = this.page.locator('#icp-nav-flyout');
        this.language = this.page.locator('text=" English - "');
        this.saveChanges = this.page.locator('#icp-save-button');
    }

    async changeLanguage() {
        await this.languageButton.click();
        await this.language.click();
        await this.saveChanges.waitFor({ state: 'visible' });
        await this.saveChanges.click();

        await expect(this.page.locator('text="EN"')).toBeVisible();
    }
}