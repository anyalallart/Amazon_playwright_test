import { Page, Locator, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';

export class SearchFromBar {
  private page: Page;
  private barInput: Locator;
  private searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.barInput = this.page.locator('#twotabsearchtextbox');
    this.searchButton = this.page.locator('#nav-search-submit-button');
  }

  async search(item: string) {
    await this.barInput.fill(item);
    await this.searchButton.click();
  }

  async searchTablier() {
    await this.search("Tablier Beauf");
    await this.page.pause();
  }

  async searchRandomItem() {
    await this.search(faker.commerce.productName());
    await this.page.pause();
  }
}

