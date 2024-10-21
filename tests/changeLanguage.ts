import { Page, Locator, expect } from "@playwright/test";

export class ChangeLanguage {
    private page: Page;
    private languageButton: Locator;
    private language: Locator;

    constructor(page: Page) {
        this.page = page;
        this.languageButton = this.page.locator('#icp-nav-flyout');
        this.language = this.page.locator('text=" English - "');
    }

    async changeLanguage() {
        await this.languageButton.click();
        await this.language.click();
    }
}