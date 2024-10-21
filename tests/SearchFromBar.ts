import { Page, Locator, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';

export class SearchFromBar {
  private page: Page;
  private BarInput: Locator;
  private SearchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.BarInput = this.page.locator('#twotabsearchtextbox');
    this.SearchButton = this.page.locator('#nav-search-submit-button');
  }

  async search(item: string) {
    await this.BarInput.fill(item);
    await this.SearchButton.click();
   
  }

  async withGoodCredentials() {
    await this.search("Tablier Beauf");
  }
}

