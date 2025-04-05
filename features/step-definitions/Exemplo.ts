import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../../pageObjects/LoginPage.ts';
import { $ } from '@wdio/globals'; // Importe o $ diretamente dos globals


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
    await loginPage.getCampoEmail.setValue("usuario");
    await loginPage.getCampoPassword.setValue("senha");
    await loginPage.getButtonLogin.click();
  }

});
