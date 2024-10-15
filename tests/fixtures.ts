import { test as base } from '@playwright/test';
import { LoginPage } from './login';

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});
const expect = base.expect;
export { test, expect }; 
