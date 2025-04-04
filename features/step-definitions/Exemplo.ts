import { Given, When, Then } from '@cucumber/cucumber';
import ExemploPage from '../../pageObjects/exemplo.page';

const exemploPage: ExemploPage = new ExemploPage();

Given('que estou na página de exemplo', async () => {
  await exemploPage.open();
});