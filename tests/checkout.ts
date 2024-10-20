const { test, expect } = require('@playwright/test');

test('Proceed to checkout', async ({ page }) => {
  // Ouvre la page du panier d'Amazon
  await page.goto('https://www.amazon.fr/gp/cart/view.html');

  // Vérifie que la page du panier est bien chargée
  await expect(page).toHaveTitle(/Votre panier/);

  // Clique sur le bouton pour procéder au paiement
  await page.click('input[name="proceedToRetailCheckout"]');

  // Vérifie que l'utilisateur est redirigé vers la page de connexion
  await expect(page).toHaveURL(/signin/);
});
