import { Page, Locator, expect } from "@playwright/test";

export class checkout {
    private page: Page;
    private proceedToCheckoutButton: Locator;
    private signInButton: Locator;
    private loginPageIndicator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.proceedToCheckoutButton = this.page.locator('input[name="proceedToRetailCheckout"]'); // Bouton "Proceed to checkout"
        this.signInButton = this.page.locator('text="Sign in to your account"'); // Bouton pour se connecter si le panier est vide
        this.loginPageIndicator = this.page.locator('#ap_email'); // Indicateur pour la page de connexion (champ email)
    }

    async proceedToCheckout() {
        await this.proceedToCheckoutButton.waitFor({ state: 'visible' });
        await this.proceedToCheckoutButton.click();

        await expect(this.loginPageIndicator).toBeVisible(); // Vérifier que l'utilisateur est sur la page de connexion
    }
}
