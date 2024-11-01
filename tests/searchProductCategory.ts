import { Page, Locator, expect } from "@playwright/test";

export class SearchPage {
    private page: Page;
    private burgerMenuButton: Locator;
    private booksCategoryButton: Locator;
    private allBooksButton: Locator;
    private searchResults: Locator;

    constructor(page: Page) {
        this.page = page;
        this.burgerMenuButton = this.page.locator('#nav-hamburger-menu'); // Sélecteur pour le menu burger
        this.booksCategoryButton = this.page.locator('a[data-menu-id="9"]'); // Sélecteur pour "Livres"
        this.allBooksButton = this.page.locator('text="Tous les livres"'); // Recherche par texte pour "Tous les livres"
        this.searchResults = this.page.locator('.s-main-slot'); // Sélecteur pour les résultats de recherche
    }

    async searchInAllBooks() {
        await this.page.goto('https://www.amazon.com'); // Aller sur la page d'accueil

        await this.burgerMenuButton.waitFor({ state: 'visible' }); // Attendre que le menu burger soit visible
        await this.burgerMenuButton.click(); // Ouvre le menu burger

        await this.booksCategoryButton.waitFor({ state: 'visible' }); // Attendre "Livres"
        await this.booksCategoryButton.click(); // Clique sur "Livres"

        await this.allBooksButton.waitFor({ state: 'visible' }); // Attendre "Tous les livres"
        await this.allBooksButton.click(); // Sélectionne "Tous les livres"

        // Vérification que les résultats sont affichés
        await expect(this.searchResults).toBeVisible();
    }
}
