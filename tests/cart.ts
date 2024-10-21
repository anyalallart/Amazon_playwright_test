import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
    private page: Page;
    private deleteButton: Locator;
    private quantity: Locator;


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

    async ModifyQuantity() {
        await this.page.click('#a-autoid-0-announce')
        await this.page.click('#quantity_5')
    }
}

