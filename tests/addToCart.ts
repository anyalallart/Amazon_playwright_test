import { Page, Locator, expect } from "@playwright/test";

export class AddToCartButton {
  private page: Page;
  private addToCartButton : Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = this.page.locator('#a-autoid-1-announce');
  }

  async addToCart(){
    await this.addToCartButton.click()
  }
}

