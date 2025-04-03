exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'], // Caminho para seus arquivos .feature
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        browserName: 'Chromedriver',
        'appium:deviceName': 'Medium Phone API 36',
        'appium:automationName': 'AndroidStudioCarrefour'
    }],
    services: ['appium'],
    framework: 'cucumber',
    cucumberOpts: {
      require: ['./steps/**/*.js'], // Caminho para seus arquivos de steps
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
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    },
    appium: {
      command: 'appium',
      args: {
        address: '127.0.0.1',
        port: 4723,
      },
    },
  };