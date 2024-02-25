import { Page } from './page.js';
import { browser } from '@wdio/globals';

class HomePage extends Page {
    get SignInLink() { return $('.login');}
    get searchBarInput() { return $('.search_query');}
    get searchBarIcon() { return $('[name="submit_search"]');}
    get womenSection() { return $('.sf-with-ul[title="Women"]');}
    get cartIcon() { return $('.shopping_cart a');}

    async open() {
        await browser.navigateTo('http://automationpractice.pl');
    }
}

export default new HomePage();