import { Page } from './page.js';
import { browser } from '@wdio/globals';

class AuthenticationPage extends Page {
    input(title) { return $(`input[name="${title}"]`);}
    get signInButton() { return $('#SubmitLogin');}
}

export default new AuthenticationPage();