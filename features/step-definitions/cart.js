import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import cartPage from '../page-objects/cart.page.js';
import productPage from '../page-objects/product.page.js';
import womenPage from '../page-objects/women.page.js';

Given('I have an empty cart', async function() {
    await homePage.cartIcon.click();
    if (!await cartPage.emptyCartMessage.isExisting()) {
        cartPage.removeAllProducts();
    }
    else {
        
    }
});
When('I add an item to cart', async function() {
    await homePage.womenSection.click(); // Navigate to women's section
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
Given('I add an item to carts', async function() {
    await browser.pause(1000);
    await homePage.womenSection.click(); // Navigate to women's section
    await womenPage.selectFromMenu('In stock'); // Sort items by 'In stock'
    await womenPage.firstProduct.click(); // Choose the first product
    // Changes products size and checks if its available
    await browser.pause(500);
    await productPage.chooseSizeMenu.selectByIndex(1);
    await expect(productPage.availabilityStatus).toHaveText(expect.stringContaining('In stock'));
    // Add item to cart
    await productPage.addToCartButton.waitForClickable();
    await productPage.addToCartButton.click();
    await browser.pause(1000);
    await productPage.continueShoppingButton.click(); // Choose continue shopping
    await productPage.homeIcon.click(); // Navigate back to home page
    await browser.pause(2000);
})