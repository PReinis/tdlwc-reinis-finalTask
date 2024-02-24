import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import womenPage from '../page-objects/women.page.js';
import productPage from '../page-objects/product.page.js';

When('I sort items by {string}', async function(sort) {
    await womenPage.selectFromMenu(sort);
    await browser.pause(2000);
});
When('I choose an item', async function() {
    await womenPage.firstProduct.click();
    await browser.pause(2000);
});
When('I change the item\'s size to {string}', async function(size) {
    await productPage.chooseSize(size);
    await browser.pause(2000);
});