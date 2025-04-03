import { Given, When, Then } from '@cucumber/cucumber';
import Driver from '../framework/Driver/Driver';
import { expect } from '@wdio/globals';

Given('que estou na página de login', async function () {
    const browser = await Driver.getInstance();
    await this.browser.url('https://exemplo.com/login');
});

When('eu insiro {string} e {string}', async function (username, password) {
    const browser = await Driver.getInstance();
    await browser.$('#username').setValue(username);
    await browser.$('#password').setValue(password);
    await browser.$('#login-button').click();
});

Then('devo ver uma mensagem de erro', async function () {
    const browser = await Driver.getInstance();
    const errorMsg = await browser.$('.error-message').getText();
    expect(errorMsg).toContain('Credenciais inválidas');
});