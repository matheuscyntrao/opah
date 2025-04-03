class TextField {
    private element: WebdriverIO.Element;

    constructor(element: WebdriverIO.Element) {
        this.element = element;
    }

    async click(): Promise<void> {
        await this.element.click();
    }

    async sendKeys(text: string): Promise<void> {
        await this.element.setValue(text);
    }
}

export default TextField;