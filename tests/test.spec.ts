import { test, expect } from '@playwright/test';
import { LoginPage } from './login';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.amazon.fr/');
})

test('Login', async ({ page }) => {
  await page.click('#nav-link-accountList');
  const loginPage = new LoginPage(page);
  await loginPage.withGoodCredentials();
});
