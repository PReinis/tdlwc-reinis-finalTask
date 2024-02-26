import { Given, When, Then } from '@wdio/cucumber-framework';
import cartPage from '../page-objects/cart.page.js';
import productPage from '../page-objects/product.page.js';
import womenPage from '../page-objects/women.page.js';
import pageHeader from '../page-objects/page.header.js';

Given('I have an empty cart', async function() {
    await pageHeader.cartIcon.click();
    if (await cartPage.removeItemButton.isExisting()) {
        await cartPage.removeAllProducts();
    }
    else {
        await cartPage.goToHomePage.click();
    }
});
When('I add an item to cart', async function() {
    await pageHeader.womenSection.click(); // Navigate to women's section
    await womenPage.selectFromMenu('In stock'); // Sort items by 'In stock'
    await womenPage.firstProduct.click(); // Choose the first product
    // Changes products size and checks if its available
    await browser.pause(2000); // Had to use a longer pause, because if the page was slow it failed loading the elements
    await productPage.chooseSizeMenu.selectByIndex(1);
    await expect(productPage.availabilityStatus).toHaveText(expect.stringContaining('In stock'));
    // Add item to cart
    await productPage.addToCartButton.waitForClickable();
    await productPage.addToCartButton.click();
    await browser.pause(1000);
    await productPage.continueShoppingButton.click(); // Choose continue shopping
    await productPage.homeIcon.click(); // Navigate back to home page
    await browser.pause(2000);
});
Then('I see cart item count {word}', async function(count) {
    await expect(pageHeader.cartItemCount).toHaveText(count)
});
Then('I add another item to cart', async function() {
    await pageHeader.womenSection.click(); // Navigate to women's section
    await womenPage.selectFromMenu('Product Name: Z to A'); // Sort items by 'Product Name: Z to A'
    await womenPage.firstProduct.click(); // Choose the first product
    // Changes products size and checks if its available
    await browser.pause(2000); // Had to use a longer pause, because if the page was slow it failed loading the elements
    await productPage.chooseSizeMenu.selectByIndex(1);
    await expect(productPage.availabilityStatus).toHaveText(expect.stringContaining('In stock'));
    // Add item to cart
    await productPage.addToCartButton.waitForClickable();
    await productPage.addToCartButton.click();
    await browser.pause(1000);
    await productPage.continueShoppingButton.click(); // Choose continue shopping
    await productPage.homeIcon.click(); // Navigate back to home page
    await browser.pause(2000);
});
When('I remove items from cart', async function() {
    await pageHeader.cartIcon.click();
    await cartPage.removeAllProducts();
});
Then('I should see that the cart is empty', async function() {
    await expect(cartPage.emptyCartMessage).toBeDisplayed();
    await expect(pageHeader.cartEmpty).toHaveText('(empty)');
});