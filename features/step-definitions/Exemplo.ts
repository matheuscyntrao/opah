import { Given, When, Then } from '@cucumber/cucumber';
import ExemploPage from '../../pageObjects/exemplo.page';
import { $ } from '@wdio/globals'; // Importe o $ diretamente dos globals


const exemploPage: ExemploPage = new ExemploPage();

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
  const campoEmail = await $("~input-email");
  const campoSenha = await $("~input-password");
  const buttonSubmit = await $('//*[contains(@text, "LOGIN")]');

  if (await campoEmail.isExisting()) {
    await campoEmail.setValue("usuario");
    await campoSenha.setValue("senha");
    await buttonSubmit.click();
  }

});
