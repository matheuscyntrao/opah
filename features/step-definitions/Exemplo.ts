import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../../pageObjects/LoginPage.ts';
import SignupPage from '../../pageObjects/SignupPage.ts';
import { $, driver } from '@wdio/globals';
import User from "../../datapool/User.js";
import Dataprovider from "../../datapool/Dataprovider.js";
import * as fs from 'fs';


const loginPage: LoginPage = new LoginPage();
const signupPage: SignupPage = new SignupPage();


Given('acesso o menu {string}', async (opcao: string) => {
   
  const seletorMenu = '~'+opcao;
    const elementoMenu = await $(seletorMenu);

    if (await elementoMenu.isExisting()) {
        await elementoMenu.click();
        console.log(`Menu acessado.`);
    } else {
        throw new Error(`Menu não encontrado com o seletor: ${seletorMenu}`);
    }

});


When('preencher os campos de login corretamente', async () => {
  
  if (await loginPage.getCampoEmail.isExisting()) {
    const userData = JSON.parse(fs.readFileSync('datapool/User.json', 'utf8'));
    const dataProvider = new Dataprovider(userData);
    const user: User = dataProvider.convertToModel<User>(User);
    await loginPage.getCampoEmail.setValue(user.usuario);
    await loginPage.getCampoPassword.setValue(user.password);
    await loginPage.getButtonLogin.click();
  }

});

When('preencher o formulário de Cadastro', async () => {
  
  if (await signupPage.getCampoEmail.isExisting()) {
    const userData = JSON.parse(fs.readFileSync('datapool/User.json', 'utf8'));
    const dataProvider = new Dataprovider(userData);
    const user: User = dataProvider.convertToModel<User>(User);
    await $('//*[@text="Sign up"]').click();
    await signupPage.getCampoEmail.setValue(user.usuario);
    await signupPage.getCampoPassword.setValue(user.password);
    await signupPage.getCampoConfirmPassword.setValue(user.password);
    await signupPage.getSignupButton.click();
  }

});

Then('o sistema deverá mostrar a mensagem {string}', async (mensagemEsperada: string) => {
  //await driver.saveScreenshot('./some/path/screenshot.png');
  //TODO: Preciso entender porque o browser/driver não fica acessível com a configuração atual.
});

