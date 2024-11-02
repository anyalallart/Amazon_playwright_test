import { Page, Locator, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';

export class LoginPage {
  private page: Page;
  private loginPage: Locator;
  private continueButton: Locator;
  private emailInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = this.page.locator('#nav-link-accountList');
    this.emailInput = this.page.locator('#ap_email');
    this.continueButton = this.page.getByLabel('Continuer');
    this.passwordInput = this.page.locator('#ap_password');
    this.loginButton = this.page.locator('#signInSubmit');
    this.errorMessage = this.page.getByRole('heading', { name: 'Un problème est survenu' })
  }

  async goToLoginPage() {
    await this.loginPage.click();
  }

  async login(email: string, password: string) {
    await this.emailInput.waitFor({ state: 'visible' }); // Attendre que le champ email soit visible
    await this.emailInput.fill(email);
    await this.continueButton.click();
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginWithErrors(email: string, password: string) {
    await this.emailInput.waitFor({ state: 'visible' }); // Attendre que le champ email soit visible
    await this.emailInput.fill(email);
    await this.continueButton.click();

    // on vérifie si le champ password est visible, c'est à dire si l'email random est correct
    if (await this.passwordInput.isVisible()) {
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    } else {
      // vérification de l'erreur
      await expect(this.errorMessage).toBeVisible();
    }
  }

  async loginWithRandomCredentials() {
    await this.goToLoginPage();
    await this.loginWithErrors(faker.internet.email(), faker.internet.password());
  }

  async withGoodCredentials() {
    await this.goToLoginPage();
    await this.login('langer.arnaud@neuf.fr', "Aigrisen");
  }
}

