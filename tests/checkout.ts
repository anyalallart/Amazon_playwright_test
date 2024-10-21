import { Page, Locator, expect } from "@playwright/test";

export class CheckoutPage {
    private page: Page;
    private proceedToCheckoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.proceedToCheckoutButton = this.page.locator('text= " Passer la commande "'); // Modifier le sélecteur en fonction du bouton réel sur la page
    }

    async proceedToCheckout() {
        await this.proceedToCheckoutButton.click();
        await this.page.waitForURL('**/signin'); // Attend que l'URL contienne "signin", ce qui signifie qu'on est redirigé vers la page de connexion
    }
}
