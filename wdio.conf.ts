import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
    runner: 'local',
    framework: 'cucumber',
    specs: ['./features/*.feature'],
    cucumberOpts: {
        require: ['./steps/*.ts'],
        timeout: 10000
    },
    logLevel: 'info',
    services: ['chromedriver']
};