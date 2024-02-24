import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';

Given('I am on the home page', async function() {
    await homePage.open();
});
When('I search for {string}', async function(text) {
    await homePage.searchBarInput.setValue(text);
    await homePage.searchBarIcon.click();
});
Then('I see items containing text {string}', async function(text) {
    const allFoundItems = await $$('[itemprop="name"]');
    await allFoundItems.forEach(async (foundItem) => {
        await expect(foundItem).toHaveText(expect.stringContaining(text));
    })
});

When('I go to the Women section', async function() {
    await homePage.womenSection.click();
});