import { Given, When, Then } from '@wdio/cucumber-framework';
import pageHeader from '../page-objects/page.header.js';

When('I search for {word}', async function(text) {
    await pageHeader.searchBarInput.waitForDisplayed();
    await pageHeader.searchBarInput.setValue(text);
    await pageHeader.searchBarIcon.waitForClickable();
    await pageHeader.searchBarIcon.click();
});