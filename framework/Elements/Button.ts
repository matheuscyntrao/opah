class Button {
    private element: WebdriverIO.Element;

    constructor(element: WebdriverIO.Element) {
        this.element = element;
    }

    async click(): Promise<void> {
        await this.element.click();
    }
}

export default Button;