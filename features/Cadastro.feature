Feature: Cadastro

  Scenario: Cadastro com sucesso
    Given acesso o menu "Login"
    When preencher o formulário de cadastro
    Then o sistema deverá mostrar a mensagem ""