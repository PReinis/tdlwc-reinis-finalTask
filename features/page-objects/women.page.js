import { Page } from './page.js';
import { browser } from '@wdio/globals';

class WomenPage extends Page {
    get sortBy() { return $('#selectProductSort');}
    get firstProduct() { return $('.product_img_link');}

    async selectFromMenu(sortOption) {
        await this.sortBy.click();
        const findOption = `//select[@id='selectProductSort']//option[contains(text(), '${sortOption}')]`;
        await $(findOption).click();
    }

    
}

export default new WomenPage();