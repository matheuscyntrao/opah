exports.config = {
  // Configurações do BrowserStack
  user: "cyntrao_rChWieenjiR", // Substitua pelo seu username do BrowserStack
  key: "b47NMqZJAXSHj2dqWerL", // Substitua pela sua access key do BrowserStack
  services: [
      ['browserstack', {
          browserstackLocal: false, // Se você precisar de testes locais, defina como true
      }]
  ],

  // Configurações gerais do WebdriverIO
  specs: ['./features/**/*.feature'], // Caminho para seus arquivos .feature
  capabilities: [{
      platformName: 'MAC',
      'appium:deviceName': 'iPhone 12', // Dispositivo desejado no BrowserStack
      'appium:platformVersion': '14', // Versão do iOS desejada
      'appium:automationName': 'XCUITest',
      browserName: 'Safari', // Browser desejado
  }],

  // Configurações do framework Cucumber
  framework: 'cucumber',
  cucumberOpts: {
      require: ['./features/step-definitions/*.js'], // Caminho para seus arquivos de steps
      backtrace: false,
      requireModule: [],
      dryRun: false,
      failFast: false,
      snippets: true,
      source: true,
      strict: false,
      tagExpression: '',
      timeout: 60000,
      ignoreUndefinedDefinitions: false,
  },

  // Configurações de reporters
  reporters: ['spec'],

  // Configurações do WebdriverIO
  logLevel: 'info', // Nível de log
  bail: 0, // Número de falhas para interromper a execução
  baseUrl: '', // URL base do seu aplicativo (se aplicável)
  waitforTimeout: 10000, // Tempo máximo de espera por um elemento
  connectionRetryTimeout: 120000, // Tempo máximo de espera para conexão com o servidor
  connectionRetryCount: 3, // Número de tentativas de reconexão
};