Feature: Cadastro com validação de mensagem de erro

  Scenario: Cadastro com sucesso
    Given acesso o menu "Login"
    When preencher o formulário de cadastro com email incorreto
    Then o sistema deverá mostrar a mensagem Please enter a valid email address
