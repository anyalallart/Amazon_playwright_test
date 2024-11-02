import { test } from './fixtures'

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.fr/');
    if (await page.isVisible('#sp-cc-accept')){
      await page.click('#sp-cc-accept');
    }
  })

test('Change language', async ({ Language }) => {
    await Language.changeLanguage();
  }
);