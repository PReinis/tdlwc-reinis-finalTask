import { Page } from './page.js';
import { browser } from '@wdio/globals';

class AuthenticationPage extends Page {
    get pageHeader() { return $('.page-heading');}
}

export default new AuthenticationPage();