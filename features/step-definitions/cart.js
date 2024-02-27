import { Given, When, Then } from '@wdio/cucumber-framework';
import cartPage from '../page-objects/cart.page.js';
import productPage from '../page-objects/product.page.js';
import womenPage from '../page-objects/women.page.js';
import pageHeader from '../page-objects/page.header.js';
import { chooseProductSize, getCartItemCount } from '../utils/utils.js';

When('I add an item to cart', async function() {
    await pageHeader.womenSection.waitForClickable();
    await pageHeader.womenSection.click(); // Navigate to women's section
    await womenPage.selectFromMenu('In stock'); // Sort items by 'In stock'
    await womenPage.firstProduct.waitForClickable();
    await womenPage.firstProduct.click(); // Choose the first product
    // Changes products size and checks if its available
    await chooseProductSize('M');
    await productPage.availabilityStatus.waitForDisplayed();
    await expect(productPage.availabilityStatus).toHaveText(expect.stringContaining('In stock'));
    // Add item to cart
    this.initialItemCount = await getCartItemCount();
    await productPage.addToCartButton.waitForClickable();
    await productPage.addToCartButton.click();
    await productPage.continueShoppingButton.waitForClickable();
    await productPage.continueShoppingButton.click(); // Choose continue shopping
    await productPage.homeIcon.waitForClickable();
    await productPage.homeIcon.click(); // Navigate back to home page
});
Then('I add another item to cart', async function() {
    await pageHeader.womenSection.click(); // Navigate to women's section
    await womenPage.selectFromMenu('Product Name: Z to A'); // Sort items by 'Product Name: Z to A'
    await womenPage.firstProduct.click(); // Choose the first product
    // Changes products size and checks if its available
    await chooseProductSize('L');
    await expect(productPage.availabilityStatus).toBeDisplayed();
    await expect(productPage.availabilityStatus).toHaveText(expect.stringContaining('In stock'));
    // Add item to cart
    this.initialItemCount = await getCartItemCount();
    await productPage.addToCartButton.waitForClickable();
    await productPage.addToCartButton.click();
    await productPage.continueShoppingButton.waitForClickable();
    await productPage.continueShoppingButton.click(); // Choose continue shopping
    await productPage.homeIcon.click(); // Navigate back to home page
});
When('I remove items from cart', async function() {
    await pageHeader.cartIcon.waitForClickable();
    await pageHeader.cartIcon.click();
    await cartPage.removeAllProducts();
    await browser.pause(1000);
});
Then('I should see that the cart is empty', async function() {
    await expect(cartPage.emptyCartMessage).toBeDisplayed();
    await expect(pageHeader.cartEmpty).toHaveText('(empty)');
});
Then('The number of items in cart increases by 1', async function() {
    const currentItemCount = await getCartItemCount();
    const expectItemCount = (this.initialItemCount + 1).toString();
    await expect(currentItemCount.toString()).toEqual(expectItemCount);
});