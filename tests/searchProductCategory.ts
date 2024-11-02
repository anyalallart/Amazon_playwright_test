import { Page, Locator, expect } from "@playwright/test";

export class SearchPage {
    private page: Page;
    private burgerMenuButton: Locator;
    private booksCategoryButton: Locator;
    private allBooksButton: Locator;
    private searchResults: string;

    constructor(page: Page) {
        this.page = page;
        this.burgerMenuButton = this.page.getByLabel('Ouvrir le menu Toutes les cat');
        this.booksCategoryButton = this.page.getByRole('link', { name: 'Livres', exact: true}).first(); 
        this.allBooksButton = this.page.getByRole('link', { name: 'Tous les livres' }).nth(1);
        this.searchResults = "https://www.amazon.fr/gp/browse.html?node=301061&ref_=nav_em__lv_0_2_9_2";
    }

    async searchInAllBooks() {
        await this.burgerMenuButton.waitFor({ state: 'visible' }); // Attendre que le menu burger soit visible
        await this.burgerMenuButton.click(); // Ouvre le menu burger

        await this.booksCategoryButton.waitFor({ state: 'visible' }); // Attendre "Livres"
        await this.booksCategoryButton.click(); // Clique sur "Livres"

        await this.allBooksButton.waitFor({ state: 'visible' }); // Attendre "Tous les livres"
        await this.allBooksButton.click(); // Sélectionne "Tous les livres"

        // Vérification que les résultats sont affichés
        expect(this.page.url()).toBe(this.searchResults);
    }
}
