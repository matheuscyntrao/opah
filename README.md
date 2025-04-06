
🔧 Configurando o ambiente:

1️⃣ Instale o Visual Studio Code e o plugin Cucumber

2️⃣ Instale o Java 1.8+ e configure a variável JAVA_HOME

3️⃣ Baixe e configure o Platform-tools (ADB) (ANDROID_HOME)



⚙️ Instalando as dependências: (obviamente nodejs instalado e typescript se for usar)

📌 npm install appium

📌 npm install uiautomator2

📌 npm install webdriverio

📌 appium install uiautomator2



Rode o comando npx tsc para compilar o typescript
Rode o npm install para instalar as dependências



Não se esqueça de instalar o android studio e criar um device! (faz login no chrome, etc pra não trancar, pensa que um emulador é tipo um telefone zerado).



(O projeto tem 2 conf, um para rodar no android studio com o app emulado e outro para rodar no browser stack (só tá configurado, não cheguei a validar a execução por lá)).



🛠️ Configuração do projeto (wdio.conf.ts):

✅ Definir capabilities do browser e device

✅ Configurar localização das features e step-definitions

✅ Escolher o runner (local, remoto, BrowserStack, Selenium Grid…)

✅ Integrar com relatórios (JUnit, Allure, ReportPortal…)

✅ Escolher o framework que você utilizará para o runner (Mocha, Junit, Cucumber, etc..)




E por fim, rodamos tudo com:
 👉 npx wdio run ./android_cucumber_androidstudiodevice_specreporter_appium.conf







 Sobre a entrega:

    1.Construção dos Scripts:
 ○ Criar 10 cenários de teste que cubram as principais funcionalidades do aplicativo
 mobile. Os cenários devem incluir:


 ■ Login/Cadastro [ OK ]

 ■ Navegação entre telas [ OK ]

 ■ Preenchimento de formulários [ OK ]

 ■ Verificação de mensagens de erro [ OK ]

 ○ Implementar o padrão Page Object para organizar os elementos da interface e as
 ações a serem realizadas. [ OK ]

 ○ Utilizar um arquivo de dados (CSV, JSON) para parametrizar alguns dos testes,
 permitindo a execução com diferentes conjuntos de dados (data-driven). (opcional) [ OK ]


 Nesta primeira etapa, tive problemas ao utilizar o browser/device talvez pela configuração que escolhi (utilizar o cucumber ao inves do mocha), e usar typescript (se for JS puro, ele interpreta o browser/device). Com isso, não fui capaz de conseguir dar um skip no alert aberto após as ações, acaba sendo uma falha na entrega, mas que vou estudar com calma depois como melhorar essa poc).



    2. Execução em Ambientes Diferentes:
 ○ Configurar o projeto para executar os testes em emuladores de Android e iOS. [ Ok para o android ]

 ○ Integrar o projeto com o BrowserStack para executar os testes em dispositivos [ OK - porém não cheguei a validar o teste visualmente, só validei a execução via terminal, e deu passed] reais. Quando executei aplicação web, o iOS nativo, não cheguei a configurar. (opcional)



    3. Geração de Evidências:
 ○ Configurar a captura automática de screenshots durante a execução dos testes,
 para facilitar a análise de falhas.

 ○ Gerar relatórios detalhados de testes, utilizando Allure Report ou ExtentReport,
 com os seguintes elementos:

 ■ Resumodostestes executados [ OK - Utilizei o próprio Spec, onde acabamos conseguindo ver no terminal os testes executados. Tenho experiência em integrar ferramentas de report, porém ainda preciso realizar o segundo teste]

 ■ Screenshots das falhas [ FAIL - Aqui, como comentei, via typescript fiquei incapaz de acessar o browser/drive, que é quem disponibiliza a função screenshot()]

 ■ Logsdeexecução [ OK - Neste caso, utilizei o service log do proprio webdriverio instalado no proprio conf]

 ■ Informações sobre o ambiente de teste [ FAIL - Neste caso, também dependo de acesso às funções do browser, scenario, que ficam indisponível com typescrit/appium/cucumber]



    4. Integração CI/CD:
 ○ Configurar um pipeline de CI/CD (GitLab CI/CD) para automatizar a execução dos
 testes a cada commit ou merge request. [ OK - Gerei um pela IA, fez sentido, substituí algumas variáveis. ]




 Sugestão de tecnologias e ferramentas que devem ser utilizadas:

 ● Linguagem: JavaScript (Usei Typescript para aprender)

 ● Framework: WebdriverIO [ OK ]

 ● Biblioteca: Appium [ OK ]

 ● Gerenciador de testes: Mocha [Usei cucumber para ser do contra haha]

 ● Asserts: Chai [ OK ]

 ● Relatórios: Allure Report ou ExtentReport [ Utilizei o próprio spec do cucumber ]

 ● CI/CD: GitLab CI/CD [ Entregarei a imagem jenkins, rodando os dois projetos após finalizar o teste de api ]

 ● Cloud de dispositivos: BrowserStack [ Como mencionado, fiz uma poc na primeira versão com o chromedriver, browser mesmo. Depois de entregar os cenários reais do demo-app do webdriverio, não cheguei a validar a execução por lá]

 ● Controle de versão: Git [ OK ]