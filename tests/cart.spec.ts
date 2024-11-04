import { test } from './fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.amazon.fr/');
  if (await page.isVisible('#sp-cc-accept')){
    await page.click('#sp-cc-accept');
  }
});

test('Add a product to the shopping cart', async ({ AddToCart, SearchFromBar }) => {
  await SearchFromBar.searchTablier();
  await AddToCart.gotoPageArticle();
  await AddToCart.addToCart();
});

test('Remove a product from the cart', async ({ AddToCart, SearchFromBar, Cart }) => {
  await SearchFromBar.searchTablier();
  await AddToCart.gotoPageArticle();
  await AddToCart.addToCart();
  await Cart.GoToCartPage();
  await Cart.deleteCart();
});

test('Modify quantity of a product from the cart', async ({ AddToCart, SearchFromBar, Cart }) => {
  await SearchFromBar.searchTablier();
  await AddToCart.gotoPageArticle();
  await AddToCart.addToCart();
  await Cart.GoToCartPage();
  await Cart.ModifyQuantity();
})

test('Proceed to checkout', async ({ AddToCart, SearchFromBar, Cart, Checkout }) => {
  await SearchFromBar.searchTablier();
  await AddToCart.gotoPageArticle();
  await AddToCart.addToCart();
  await Cart.GoToCartPage();
  await Checkout.proceedToCheckout();
});