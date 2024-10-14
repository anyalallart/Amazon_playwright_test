import { Page, Locator, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';

export class LoginPage {
  private page: Page;
  private continueButton: Locator;
  private emailInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = this.page.locator('#ap_email');
    this.continueButton = this.page.locator('#continue');
    this.passwordInput = this.page.locator('#ap_password');
    this.loginButton = this.page.locator('#signInSubmit');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.continueButton.click();
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginWithRandomCredentials() {
    await this.login(faker.internet.email(), faker.internet.password());
  }

  async withGoodCredentials() {
    await this.login('', '');
  }
}

