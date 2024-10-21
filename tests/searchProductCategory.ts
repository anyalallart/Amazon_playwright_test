const { test, expect } = require('@playwright/test');

test('Search a product from a category', async ({ page }) => {
  // Ouvre Amazon.fr
  await page.goto('https://www.amazon.fr');

  // Vérifie que la page d'accueil est bien chargée
  await expect(page).toHaveTitle(/Amazon/);

  // Clique sur le bouton pour afficher les catégories
  await page.click('#nav-hamburger-menu');

  // Sélectionne la catégorie "Automotive"
  await page.click('text=Automotive');

  // Clique sur le bouton de recherche
  await page.click('input[type="submit"]');

  // Vérifie que les résultats de recherche sont affichés
  await expect(page).toHaveURL(/s?k=Automotive/);
});
