import { test as base } from '@playwright/test';
import { LoginPage } from './login';
import { CheckoutPage } from './checkout';
import { CartPage } from './cart';
import { SearchFromBar } from './searchFromBar';
import { AddToCartButton } from './addToCart';
import { createAccount } from './creatingAccount';
import { SearchPage } from './searchProductCategory';
import { ChangeLanguage } from './changeLanguage';


const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
    await use(new CheckoutPage(page));
    await use(new CartPage(page));
    await use(new SearchFromBar(page));
    await use(new AddToCartButton(page));
    await use(new createAccount(page));
    await use(new SearchPage(page));
    await use(new ChangeLanguage(page));
  },
});
const expect = base.expect;
export { test, expect }; 
