class ExemploPage {
    open() {
      return browser.url('https://exemplo.com'); // Substitua pela URL da sua página
    }
  
    get campoNome() {
      return $('#nome'); // Substitua pelo seletor do campo de nome
    }
  
    get botaoEnviar() {
      return $('#enviar'); // Substitua pelo seletor do botão enviar
    }
  
    get mensagemSucesso() {
      return $('#mensagem-sucesso'); // Substitua pelo seletor da mensagem de sucesso
    }
  
    preencherFormulario(nome) {
      this.campoNome.setValue(nome);
      this.botaoEnviar.click();
    }
  }
  
export default ExemploPage;