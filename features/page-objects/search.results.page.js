import { Page } from './page.js';
import { browser } from '@wdio/globals';

class SearchResultsPage extends Page {
    get itemName() { return $('[itemprop="name"]');}
}
export default new SearchResultsPage();