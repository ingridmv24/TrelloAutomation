class LoginPage {
    // Selectors
    get emailInput() { return $('#username'); }
    get continueButton() {return $('#login-submit')}
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-submit'); }
    get signUpButton() { return $('#signup-submit'); }
    get emailError() { return $("[aria-live='polite']"); }

    // Methods
    async open() {
        await browser.url('https://trello.com/login');
    }

    async setEmail(email) {
        await this.emailInput.setValue(email);
    }

    async setPassword(password) {
        await this.passwordInput.setValue(password);
    }

    async clickOnContinueButton() {
        await this.continueButton.click();
    }

    async clickOnLoginButton() {
        await this.loginButton.click();
    }

    async clickOnSignUpButton() {
        await this.signUpButton.click();
    }

    async getEmailErrorMessage(){
        const errorElement = await this.emailError.getText();
        return errorElement;
    }

    async login(email, password) {
        await this.open();
        await this.setEmail(email);
        await this.clickOnContinueButton();
        await this.setPassword(password);
        await this.clickOnLoginButton();
    }
}
module.exports = new LoginPage();