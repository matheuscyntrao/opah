Feature: Login

  Scenario Outline: Login com sucesso

    Given que o usuário preencha as informações corretamente "<usuario>" "<senha>" "<isCaptcha>"
    And o usuário interagir com o captcha "<isCaptcha>"
    Then o usuário se autentica com sucesso
    And o sistema redireciona o usuário para a home
    Examples:
      | usuario        | senha        | isCaptcha |
      | usuarioCorreto | senhaCorreta | true      |

  Scenario Outline: Login sem sucesso <mensagem>

    Given o usuário esteja na url URL
    When o usuário preencher o campo nome com "<usuario>"
    And o usuário preencher o campo senha com "<senha>"
    And o usuário interagir com o captcha "<isCaptcha>"
    Then o sistema deverá informar a mensagem de erro "<mensagem>"
    Examples:
      | usuario          | senha          | isCaptcha | mensagem                                            |
      | usuarioCorreto   | senhaCorreta   | false     | Favor preencher o captcha.                          |
      | usuarioCorreto   | senhaIncorreta | true      | Senha está incorreta.                               |
      | usuarioCorreto   | senhaIncorreta | false     | Senha está incorreta e o catpcha não foi marcado.   |
      | usuarioIncorreto | senhaCorreta   | true      | Usuário não encontrado.                             |
      | usuarioIncorreto | senhaCorreta   | false     | Usuário não encontrado e o catpcha não foi marcado. |
      | usuarioIncorreto | senhaIncorreta | true      | Usuário e senha estão incorretos.                   |
      | usuarioIncorreto | senhaIncorreta | false     | Favor preencher todos os dados do formulário.       |


Feature: Cadastro

  Scenario: Smoke Test

    Given o usuário preencha todas as informações corretas
    When o usuário submeter o cadastro
    Then o sistema deverá loga-lo
    And o sistema deverá redirecioná-lo para a home

  Scenario Outline: Regression Test

    Given o usuário preencha alguma informação incorreta <usuario>
    When o usuário submeter o cadastro
    Then o sistema deverá exibir uma mensagem <mensagem>
    Examples:
      | usuario | mensagem |

Feature: Navegação entre telas

  Scenario Outline: Cliques nos itens do menu

    Given que o usuário acesse a tela "<url_tela>"
    When o usuário clicar no menu "<opcaoMenu>"
    Then o sistema deverá redirecioná-lo para "<url_retorno>"
    Examples:
      | url_tela | opcaoMenu      | url_retorno |
      | /home    | pagina inicial | /home       |
      | /home    | blog           | /blog       |
      | /home    | cursos         | /cursos     |
      | /home    | vagas          | /vagas      |
      | /home    | contato        | /contato    |

Feature: Preenchimento de formulários

  Scenario: Validação da presença dos campos na tela

    Given que o usuário acesse o formulário
    When o a página for carregada
    Then o campo <campo1> deverá estar presente
    And o campo <campo2> deverá estar presente

  Scenario Outline: Validação de valores limite

    Given que o usuário acesse o formulário
    When a página for carregada
    And o usuário preencher o campo <campo> com o valor "<valor>"
    Then o sistema deverá retornar a mensagem "<mensagem>"
    Examples:
      | campo | valor | mensagem |

Feature: Verificação de mensagens de erro

Given que o usuário preencha "<nome>" "<endereço>" "<qualquer_variavel>"
When ele submeter o formulário
Then o sistema deverá retornar a mensagem de erro: "<mensagem>"

Examples:
| nome | endereço | qualquer_variavel | mensagem |
