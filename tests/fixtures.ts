import { test as base } from '@playwright/test';
import { LoginPage } from './login';
import { checkout } from './checkout';
import { CartPage } from './cart';
import { SearchFromBar } from './searchFromBar';
import { AddToCartButton } from './addToCart';
import { createAccount } from './creatingAccount';
import { SearchPage } from './searchProductCategory';
import { LanguagePage } from './changeLanguage';


const test = base.extend({
  Login: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  Checkout: async ({ page }, use) => {
    await use(new checkout(page));
  },
  Cart: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  SearchFromBar: async ({ page }, use) => {
    await use(new SearchFromBar(page));
  },
  AddToCart: async ({ page }, use) => {
    await use(new AddToCartButton(page));
  },
  CreateAccount: async ({ page }, use) => {
    await use(new createAccount(page));
  },
  SearchProductCategory: async ({ page }, use) => {
    await use(new SearchPage(page));
  },
  Language: async ({ page }, use) => {
    await use(new LanguagePage(page));
  }
});

const expect = base.expect;
export { test, expect }; 
