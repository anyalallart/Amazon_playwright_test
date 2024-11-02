import { test } from './fixtures';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.fr/');
    if (await page.isVisible('#sp-cc-accept')) {
        await page.click('#sp-cc-accept');
    }
})

test('Login', async ({ Login }) => {
    await Login.withGoodCredentials();
});

test('Login with random credentials', async ({ Login }) => {
    await Login.loginWithRandomCredentials();
});

test('Create an account', async ({ CreateAccount }) => {
    await CreateAccount.createAccountWithCredentials();
}); 

test('Create account with random credentials', async ({ CreateAccount }) => {
    await CreateAccount.createAccountWithRandomCredentials();
});

test('Create an account with existing email', async ({ CreateAccount }) => {
    await CreateAccount.createAccountExistingEmailWithCredentials();
});