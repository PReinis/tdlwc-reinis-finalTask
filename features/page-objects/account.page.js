import { Page } from './page.js';
import { browser } from '@wdio/globals';

class AccountPage extends Page {
    get nameButton() { return $('.account');}
}

export default new AccountPage();