import { Page, Locator, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';

export class LoginPage {
  private page: Page;
  private loginPage: Locator;
  private continueButton: Locator;
  private emailInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = this.page.locator('#nav-link-accountList');
    this.emailInput = this.page.locator('#ap_email');
    this.continueButton = this.page.getByLabel('Continuer');
    this.passwordInput = this.page.locator('#ap_password');
    this.loginButton = this.page.locator('#signInSubmit');
  }

  async goToLoginPage() {
    await this.loginPage.click();
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
    await this.goToLoginPage();
    await this.login('langer.arnaud@neuf.fr', "Aigrisen");
    //await this.login('votre_email@example.com', "Aigrisen");
  }
}

