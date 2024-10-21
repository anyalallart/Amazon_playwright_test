import { test, expect } from '@playwright/test';
import { LoginPage } from './login';
import { CheckoutPage } from './checkout';
import { CartPage } from './cart';
import { SearchFromBar } from './SearchFromBar';
import { AddToCartButton } from './addToCart';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.amazon.fr/');
  await page.click('#sp-cc-accept');
})

test('Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.withGoodCredentials();
});

test('Proceed to checkout', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.proceedToCheckout();
});

test('Delete from Cart', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.GoToCartPage();
  await cartPage.deleteCart();
});

test('Modify Cart', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.GoToCartPage();
  await cartPage.ModifyQuantity();
})

test('Search', async ({ page }) => {
  const searchFromBar = new SearchFromBar(page);
  await searchFromBar.SearchTablier();
});

test ('Add to cart', async ({ page }) => {
  const addtochartButton = new AddToCartButton(page);
  await addtochartButton.searchTablier();
  await addtochartButton.addToCart();
});
