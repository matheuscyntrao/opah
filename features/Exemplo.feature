Feature: Envio de Formulário

  Scenario Outline: Acessar botões dos menus dinamicamente a partir do cucumber
    Given acesso o menu "<opcao>"
    
    Examples:
    |opcao| 
    |Home |
    |Webview|
    |Login |
    |Forms |
    |Swipe |
    |Drag |
