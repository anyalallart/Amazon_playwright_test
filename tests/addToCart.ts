import { Page, Locator, expect } from "@playwright/test";

export class AddToCartButton {
  private page: Page;
  private SelectionArticle : Locator;
  private addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.SelectionArticle = this.page.locator('.');
    this.addToCartButton= this.page.locator('tesxt="ZKGYUS Tablier de cuisine Sexy Funny Novelty"')
  }

  async gotoPageArticle(){
    await this.SelectionArticle.click()
  }
  
  async addToCart(){
    await this.addToCartButton.click()
  }
}

