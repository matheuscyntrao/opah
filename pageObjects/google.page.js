class GooglePage {
    open() {
      return browser.url('https://www.google.com');
    }
  
    get campoPesquisa() {
      return $('#APjFqb');
    }
  
    get resultadosPesquisa() {
      return $('#rso');
    }
  
    pesquisar(texto) {
      this.campoPesquisa.setValue(texto);
      this.campoPesquisa.keys('Enter');
    }
  }
  
  module.exports = new GooglePage();