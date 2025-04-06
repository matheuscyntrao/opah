 Feature: Login
 
  Scenario: Login com sucesso utilizando usuário do datapool
    Given acesso o menu "Login"
    When preencher os campos de login corretamente
    Then o sistema deverá mostrar a mensagem "You are logged in!"
