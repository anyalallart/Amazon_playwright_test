import { test, expect } from '@playwright/test';
import { LoginPage } from './login';
import { CheckoutPage } from './checkout';
import { CartPage } from './cart';
import { SearchFromBar } from './searchFromBar';
import { AddToCartButton } from './addToCart';
import { createAccount } from './creatingAccount';
import { SearchPage } from './searchProductCategory';
import { ChangeLanguage } from './changeLanguage';

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

test('Create an account with existing email', async ({ page }) => {
  const createAccountExistingEmailPage = new createAccount(page);
  await createAccountExistingEmailPage.createAccountExistingEmailWithCredentials();
});

test('Proceed to checkout', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.proceedToCheckout();
});

test('Search category', async ({ page }) => {
  const searchPage = new SearchPage(page);
  await searchPage.searchInAllBooks();
});

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

test('Delete from Cart', async ({ page }) => {
  const addtochartButton = new AddToCartButton(page);
  const searchFromBar = new SearchFromBar(page);
  const cartPage = new CartPage(page);
  await searchFromBar.searchTablier();
  await addtochartButton.gotoPageArticle();
  await addtochartButton.addToCart();
  await cartPage.GoToCartPage();
  await cartPage.deleteCart();
});

test('Modify Cart', async ({ page }) => {
  const addtochartButton = new AddToCartButton(page);
  const searchFromBar = new SearchFromBar(page);
  const cartPage = new CartPage(page);
  await searchFromBar.searchTablier();
  await addtochartButton.gotoPageArticle();
  await addtochartButton.addToCart();
  await cartPage.GoToCartPage();
  await cartPage.ModifyQuantity();
})

test('Proceed to checkout', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  const addtochartButton = new AddToCartButton(page);
  const searchFromBar = new SearchFromBar(page);
  const cartPage = new CartPage(page);
  await searchFromBar.searchTablier();
  await addtochartButton.gotoPageArticle();
  await addtochartButton.addToCart();
  await cartPage.GoToCartPage();
  await checkoutPage.proceedToCheckout();
});

test('Change language', async ({ page }) => {
  const changeLanguage = new ChangeLanguage(page);
  await changeLanguage.changeLanguage();
});
