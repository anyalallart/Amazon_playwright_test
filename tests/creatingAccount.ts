import { Page, Locator, test, expect } from '@playwright/test';

export class createAccount {
  private page: Page;
  private nameInput: Locator;
  private emailInput: Locator;
  private passwordInput: Locator;
  private passwordInputCheck: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = this.page.locator('#ap_customer_name');
    this.emailInput = this.page.locator('#ap_email');
    this.passwordInput = this.page.locator('#ap_password');
    this.passwordInputCheck = this.page.locator('#ap_password_check');
  }

  async goToCreateAccount() {
    this.page.goto('https://www.amazon.fr/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.fr%2Fref%3Dnav_ya_signin&prevRID=6EFVATBQPQXM2QA2X48Q&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=frflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=frflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
  }

  async createAccount(name: string, email: string, password: string, passwordCheck: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.passwordInputCheck.fill(passwordCheck);
  }

  async createAccountWithCredentials() {
    await this.createAccount('Jean Kulki', 'votre_email@example.com', 'MonP@ssword', 'MonP@ssword');
  }

}



