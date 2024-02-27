import { Given, When, Then } from '@wdio/cucumber-framework';
import womenPage from '../page-objects/women.page.js';
import productPage from '../page-objects/product.page.js';
import cartPage from '../page-objects/cart.page.js';
import authenticationPage from '../page-objects/authentication.page.js';
import pageHeader from '../page-objects/page.header.js';
import { chooseProductSize } from '../utils/utils.js';


When('I go to the Women section', async function() {
    await pageHeader.womenSection.waitForClickable();
    await pageHeader.womenSection.click();
});
Then('I see items containing text {word}', async function(text) { // Case insensitive search
    const allFoundItems = await $$(womenPage.productName);
    await allFoundItems.forEach(async (foundItem) => {
        const itemText = await foundItem.getText();
        await expect(itemText.toUpperCase()).toContain(text.toUpperCase());
    })
});
When('I sort items by \'In stock\'', async function() {
    await womenPage.selectFromMenu('In stock');
});
When('I choose the first item', async function() {
    await womenPage.firstProduct.waitForClickable();
    await womenPage.firstProduct.click();
});
When('I change the item\'s attributes', async function() {
    await chooseProductSize('M');
    await productPage.availabilityStatus.waitForDisplayed();
    await expect(productPage.availabilityStatus).toHaveText(expect.stringContaining('In stock'));
});
When('I add the item to the cart', async function() {
    await productPage.addToCartButton.waitForClickable();
    await productPage.addToCartButton.click();
});
When('I choose to proceed to checkout', async function() {
    await productPage.proceedToCheckoutButton.waitForClickable();
    await productPage.proceedToCheckoutButton.click();
});
When('I press proceed to checkout button on the cart page', async function() {
    await cartPage.proceedToCheckoutButton.waitForClickable();
    await cartPage.proceedToCheckoutButton.click();
});
Then('I am asked to sign in or create an account', async function() {
    await browser.pause(1000);
    await expect(authenticationPage.pageHeader).toHaveText(expect.stringContaining('AUTHENTICATION'));
});