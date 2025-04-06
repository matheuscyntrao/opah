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
    await signupPage.getCampoEmail.setValue(user.usuario);
    await signupPage.getCampoPassword.setValue(user.password);
    await signupPage.getCampoConfirmPassword.setValue(user.password);
    await signupPage.getSignupButton.click();
  }

});

Then('o sistema deverá mostrar a mensagem {string}', async (mensagemEsperada: string) => {
  $(document).ready(function() {
    //TODO: Entender como fazer o haldner do alert (tentei bastante rsrs).
    //TODO: Vou implementar o before after, que daí não passo por isso, mas seria interessante conseguir até validar a mensagem do alert nos cenários.
    // Da forma como construí, o browser/driver parece não ter acesso global no appium.
  });
});

