import { test } from './fixtures';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.fr/');
    if (await page.isVisible('#sp-cc-accept')){
      await page.click('#sp-cc-accept');
    }
  })

test('Search category', async ({ SearchProductCategory }) => {
    await SearchProductCategory.searchInAllBooks();
  }
);

test('Search from bar', async ({ SearchFromBar }) => {
    await SearchFromBar.searchTablier();
  }
);

test('Search random item', async ({ SearchFromBar }) => {
    await SearchFromBar.searchRandomItem();
  }
);