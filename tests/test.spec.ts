import { test, expect } from '@playwright/test';
import { LoginPage } from './login';
import { CheckoutPage } from './checkout';
import { CartPage } from './cart';
import { SearchFromBar } from './searchFromBar';
import { AddToCartButton } from './addToCart';
import { createAccount } from './creatingAccount';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.amazon.fr/');
  await page.click('#sp-cc-accept');
})

test('Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.withGoodCredentials();
});

test('Create an account', async ({ page }) => {
  const createAccountPage = new createAccount(page);
  await createAccountPage.createAccountWithCredentials();
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
  await searchFromBar.searchTablier();
});

test ('Add to cart', async ({ page }) => {
  const addtochartButton = new AddToCartButton(page);
  const searchFromBar = new SearchFromBar(page);
  await searchFromBar.searchTablier();
  await addtochartButton.gotoPageArticle();
  await addtochartButton.addToCart();
});
