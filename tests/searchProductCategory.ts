import { Page, Locator, expect } from "@playwright/test";

export class SearchPage {
    private page: Page;
    private categoryButton: Locator;
    private automotiveCategoryButton: Locator;
    private searchButton: Locator;
    private searchResults: Locator;

    constructor(page: Page) {
        this.page = page;
        this.categoryButton = this.page.locator('#nav-hamburger-menu'); // Sélecteur pour le bouton de catégorie
        this.automotiveCategoryButton = this.page.locator('a[data-menu-id="9"]'); //SElecteur pour aller dans Livres
        this.searchButton = this.page.locator('input[type="submit"]'); // Sélecteur pour le bouton de recherche
        this.searchButton = this.page.locator('a[href="/gp/browse.html?node=301061&amp;ref_=nav_em__lv_0_2_9_2"]'); // Sélecteur pour le bouton de recherche
        this.searchResults = this.page.locator('.s-main-slot'); // Sélecteur pour les résultats de recherche
    }

    async searchInCategory() {
        await this.page.goto('https://www.amazon.com'); // Assure que tu es sur la page d'accueil
        await this.categoryButton.click();
        await this.automotiveCategoryButton.click();
        await this.searchButton.click();
        
        // Vérification que les résultats sont affichés
        await expect(this.searchResults).toBeVisible();
    }
}

