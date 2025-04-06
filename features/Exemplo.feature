Feature: Envio de Formulário

  Scenario Outline: Acessar botões dos menus dinamicamente a partir do cucumber
    Given acesso o menu "<opcao>"
    
    Examples:
    |opcao| 
    |Drag |
    |Home |
    |Webview|
    |Login |
    |Forms |
    |Swipe |
    |Drag |


  Scenario: Login com sucesso utilizando usuário do datapool
    Given acesso o menu "Login"
    When preencher os campos de login corretamente
    Then o sistema deverá mostrar a mensagem "You are logged in!"


  Scenario: Cadastro com sucesso
    Given acesso o menu "Login"
    When preencher o formulário de Cadastro
    Then o sistema deverá mostrar a mensagem ""