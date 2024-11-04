import { test } from './fixtures';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.fr/');
    if (await page.isVisible('#sp-cc-accept')){
      await page.click('#sp-cc-accept');
    }
  })

test('Search a product from a category', async ({ SearchProductCategory }) => {
    await SearchProductCategory.searchInAllBooks();
  }
);

test('Search for a product', async ({ SearchFromBar }) => {
    await SearchFromBar.searchTablier();
  }
);

test('Search random item', async ({ SearchFromBar }) => {
    await SearchFromBar.searchRandomItem();
  }
);