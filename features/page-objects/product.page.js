import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductPage extends Page {
    get chooseSizeMenu() { return $('#group_1'); }
    get addToCartButton() { return $('button.exclusive'); }
    get proceedToCheckoutButton() { return $('[title="Proceed to checkout"]');}
    get availabilityStatus() { return $('#availability_value');}
    get continueShoppingButton() { return $('[title="Continue shopping"]');}
    get homeIcon() { return $('.icon-home');}
}

export default new ProductPage();