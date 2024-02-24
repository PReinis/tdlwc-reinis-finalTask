import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductPage extends Page {
    get chooseSizeMenu() { return $('.form-control.attribute_select'); }

    async chooseSize(size) {
        await this.chooseSizeMenu.waitForClickable();
        await this.chooseSizeMenu.click();
        const findSize = `//select[@name='group_1']//option[contains(text(), '${size}')]`;
        await $(findSize).click();
    }
}

export default new ProductPage();