import { Page, Locator, expect } from "@playwright/test";

export class AddToCartButton {
  private page: Page;
  private SelectionArticle : Locator;
  private addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.SelectionArticle = this.page.locator('text="Yuknees Tablier de Cuisine de Motif d\'Homme Muscle,Tablier Sexy et drôle,Tabliers pour Barbecue,pour Copain Cadeaux Fun Party Cuisine Gag Cadeau"');
    this.addToCartButton= this.page.locator('#add-to-cart-button')
  }

  async gotoPageArticle(){
    await this.SelectionArticle.click()
  }
  
  async addToCart(){
    await this.addToCartButton.click()
  }
}

