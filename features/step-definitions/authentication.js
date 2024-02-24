import { Given, When, Then } from '@wdio/cucumber-framework';
import { users } from '../test-data/users.js';
import AllureReporter from '@wdio/allure-reporter';
import homePage from '../page-objects/home.page.js';
import authenticationPage from '../page-objects/authentication.page.js';
import accountPage from '../page-objects/account.page.js';

Given('I have logged in as {word}', async function(name) {
    if (!Object.keys(users).includes(name)) {
        throw Error(`User ${name} is not recognized`);
    }
    const user = users[name];
    AllureReporter.addArgument('user', user);

    await homePage.SignInLink.click();
    await authenticationPage.input("email").setValue(user.email);
    await authenticationPage.input("passwd").setValue(user.password);
    await authenticationPage.signInButton.click();
    await expect(accountPage.nameButton).toHaveText(`${user.firstname} ${user.lastname}`);
});