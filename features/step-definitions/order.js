import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import womenPage from '../page-objects/women.page.js';
import productPage from '../page-objects/product.page.js';
import cartPage from '../page-objects/cart.page.js';
import authenticationPage from '../page-objects/authentication.page.js';
import pageHeader from '../page-objects/page.header.js';


When('I go to the Women section', async function() {
    await pageHeader.womenSection.click();
});
When('I search for {string}', async function(text) {
    await pageHeader.searchBarInput.setValue(text);
    await pageHeader.searchBarIcon.click();
});
Then('I see items containing text {string}', async function(text) {
    const allFoundItems = await $$('[itemprop="name"]');
    await allFoundItems.forEach(async (foundItem) => {
        await expect(foundItem).toHaveText(expect.stringContaining(text));
    })
});
When('I sort items by \'In stock\'', async function() {
    await womenPage.selectFromMenu('In stock');
});
When('I choose the first item', async function() {
    await womenPage.firstProduct.click();
});
When('I change the item\'s attributes if it is not in stock', async function() {
    await browser.pause(2000); // Had to use a longer pause, because if the page was slow it failed loading the elements
    await productPage.chooseSizeMenu.selectByIndex(1);
    await expect(productPage.availabilityStatus).toHaveText(expect.stringContaining('In stock'));
});
When('I add the item to the cart', async function() {
    await productPage.addToCartButton.waitForClickable();
    await productPage.addToCartButton.click();
});
When('I choose to proceed to checkout', async function() {
    await productPage.proceedToCheckoutButton.waitForDisplayed();
    await productPage.proceedToCheckoutButton.click();
});
When('I press proceed to checkout button on the cart page', async function() {
    await cartPage.proceedToCheckoutButton.waitForClickable();
    await cartPage.proceedToCheckoutButton.click();
});
Then('I am asked to sign in or create an account', async function() {
    await browser.pause(500);
    await expect(authenticationPage.pageHeader).toHaveText(expect.stringContaining('AUTHENTICATION'));
})