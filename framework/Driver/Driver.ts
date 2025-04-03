import { remote, Browser } from 'webdriverio';

class Driver {
    private static instance: Browser;

    public static async getInstance(): Promise<Browser> {
        if (!this.instance) {
            this.instance = await remote({
                capabilities: {
                    browserName: 'chrome',
                },
                logLevel: 'info',
                waitforTimeout: 10000
            });
        }
        return this.instance;
    }

    public static async closeInstance(): Promise<void> {
        if (this.instance) {
            await this.instance.deleteSession();
            this.instance = undefined!;
        }
    }
}

export default Driver;
