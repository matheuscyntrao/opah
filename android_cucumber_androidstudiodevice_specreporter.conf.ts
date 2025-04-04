exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'], // Caminho para seus arquivos .feature
    capabilities: [{
        platformName: 'Android',
        browserName: 'Chromedriver',
        'appium:deviceName': 'Medium Phone API 36',
        'appium:automationName': 'UiAutomator2'
    }],
    services: ['appium'],
    framework: 'cucumber',
    cucumberOpts: {
      require: ['./features/step-definitions/*.ts'], // Caminho para seus arquivos de steps
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
    reporters: ['spec'],
    appium: {
      command: 'appium',
      args: {
        address: '127.0.0.1',
        port: 4723,
      },
    },
  };