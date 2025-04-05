import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../../pageObjects/LoginPage.ts';
import { $ } from '@wdio/globals'; // Importe o $ diretamente dos globals

import User from "../../datapool/User.js";
import Dataprovider from "../../datapool/Dataprovider.js";
import * as fs from 'fs'; // Importe o módulo 'fs'

const loginPage: LoginPage = new LoginPage();

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


Given('preencher os campos de login corretamente', async () => {
  
  if (await loginPage.getCampoEmail.isExisting()) {
    const userData = JSON.parse(fs.readFileSync('../../datapool/User.json', 'utf8'));
    const dataProvider = new Dataprovider(userData);
    const user: User = dataProvider.convertToModel<User>(User);
    await loginPage.getCampoEmail.setValue(user.usuario);
    await loginPage.getCampoPassword.setValue(user.password);
    await loginPage.getButtonLogin.click();
  }

});
