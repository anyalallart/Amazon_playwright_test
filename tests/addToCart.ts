import { Page, Locator, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';

export class AddToCartButton {
  private page: Page;
  private BarInput: Locator;
  private SearchButton: Locator;
  private AddtochartButton : Locator;

  constructor(page: Page) {
    this.page = page;
    this.BarInput = this.page.locator('#twotabsearchtextbox');
    this.SearchButton = this.page.locator('#nav-search-submit-button');
    this.AddtochartButton = this.page.locator('#a-autoid-1-announce');
  }

  async search(item: string) {
    await this.BarInput.fill(item);
    await this.SearchButton.click();
  }

  async searchTablier() {
    await this.search("Tablier Beauf");
  }

  async addToCart(){
    await this.AddtochartButton.click()
  }

  async mainAddToCart(){
    this.searchTablier()
    this.addToCart()
  }
}

