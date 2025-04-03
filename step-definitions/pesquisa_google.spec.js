import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageObjects/login.page.js';
import SecurePage from '../pageObjects/secure.page.js';

const pages = {
    login: LoginPage

}


When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    //await LoginPage.login(username, password)
    console.log("rodou o spec" + username, password)
});



