import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
    private page: Page;
    private goToCartPage: Locator;
    private deleteButton: Locator;
    private modifyQuantity: Locator;
    private quantity: Locator;
    private verifyCartEmpty: Locator;
    private verifyCartEmpty2: Locator
    private verifyQuantity: Locator;
    private verifyInCart: string;

    constructor(page: Page) {
        this.page = page;
        this.deleteButton = this.page.locator('text="Supprimer"')
        this.goToCartPage = this.page.locator('#nav-cart-count')
        this.modifyQuantity = this.page.locator('#a-autoid-1-announce')
        this.quantity = this.page.locator('#quantity_5')
        this.verifyCartEmpty2 = this.page.locator('#sc-active-cart div').filter({ hasText: 'Votre panier Amazon est vide.' }).nth(2)
        this.verifyCartEmpty = this.page.getByRole('heading', { name: 'Votre panier Amazon est vide' });
        // je veux vérifier que la quantité a bien été modifiée à 5
        this.verifyQuantity = this.page.locator('#activeCartViewForm span').filter({ hasText: /^5$/ });
        this.verifyInCart = "https://www.amazon.fr/gp/cart/view.html?ref_=nav_cart";
    }

    async GoToCartPage(){
        // va à la page du panier
        await this.goToCartPage.click();

        // vérification
        expect(this.page.url()).toBe(this.verifyInCart);
    }

    async deleteCart() {
        // supprime le produit du panier
        await this.deleteButton.click();

        // vérification
        // refresh la page pour vérifier que le panier est vide
        await this.page.reload();
        await expect(this.verifyCartEmpty).toBeVisible();
    }

    async ModifyQuantity() {
        // modifie la quantité du produit
        await this.modifyQuantity.click();
        await this.quantity.click();

        // vérification que la quantité est à 5
        await expect(this.verifyQuantity).toHaveText("5");
    }
}