Feature: Envio de Formulário

  Scenario: Enviar formulário com sucesso
    Given que estou na página de exemplo
    When eu preencho o campo nome com "Teste" e clico em enviar
    Then eu devo ver uma mensagem de sucesso