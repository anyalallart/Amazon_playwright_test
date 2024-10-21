import { Page, Locator, test, expect } from '@playwright/test';

export class createAccount {
  private page: Page;
  private buttonCreateAccount: Locator;
  private loginPage: Locator;
  private nameInput: Locator;
  private emailInput: Locator;
  private passwordInput: Locator;
  private passwordInputCheck: Locator;
  private continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonCreateAccount = this.page.locator('#createAccountSubmit');
    this.loginPage = this.page.locator('#nav-link-accountList');
    this.nameInput = this.page.locator('#ap_customer_name');
    this.emailInput = this.page.locator('#ap_email');
    this.passwordInput = this.page.locator('#ap_password');
    this.passwordInputCheck = this.page.locator('#ap_password_check');
    this.continueButton = this.page.locator('#continue');
  }

  async goToCreateAccount() {
    await this.loginPage.click();
    await this.buttonCreateAccount.click();
  }

  async createAccount(name: string, email: string, password: string, passwordCheck: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.passwordInputCheck.fill(passwordCheck);
    await this.continueButton.click();
    await this.page.pause();
  }

  async createAccountWithCredentials() {
    await this.goToCreateAccount();
    await this.createAccount('Jean Kulki', 'votre_email@example.com', 'MonP@ssword', 'MonP@ssword');
  }

}



