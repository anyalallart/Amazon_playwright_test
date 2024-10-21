import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
    private page: Page;
    private deleteButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.deleteButton = this.page.locator('#delete-button')

    }

    async GoToCartPage(){
        await this.page.click('#nav-cart-count')
    }

    async deleteCart() {
        await this.deleteButton.click();
    }
}

