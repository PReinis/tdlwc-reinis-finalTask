import { Page } from './page.js';
import { browser } from '@wdio/globals';

class PageHeader extends Page {
    get searchBarInput() { return $('.search_query');}
    get searchBarIcon() { return $('[name="submit_search"]');}
    get cartIcon() { return $('.shopping_cart a');}
    get womenSection() { return $('.sf-with-ul[title="Women"]');}
    get cartItemCount() { return $('.shopping_cart .ajax_cart_quantity');}
    get cartEmpty() { return $('.ajax_cart_no_product');}
    
}

export default new PageHeader();