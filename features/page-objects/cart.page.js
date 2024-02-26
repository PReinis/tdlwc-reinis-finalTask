import homePage from './home.page.js';
import { Page } from './page.js';
import { browser } from '@wdio/globals';

class CartPage extends Page {
    get proceedToCheckoutButton() { return $('.cart_navigation a');}
    get emptyCartMessage() { return $('.alert');}
    get removeItemButton() { return $('.icon-trash');}
    get goToHomePage() { return $('.icon-home');}

    async removeAllProducts() {
            try {
                while (await this.removeItemButton.isExisting()) {
                    await this.removeItemButton.waitForDisplayed({ timeout: 2000});
                    await this.removeItemButton.click();
                    await browser.pause(1000);
                }
                await this.goToHomePage.click();
            }
            catch {
                await browser.pause(500);
                return true;
            }
        }
    }

export default new CartPage();