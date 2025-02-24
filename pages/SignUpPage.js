class SignUpPage {
    // Selectores
    get emailInput() { return $('#email'); }
    get registerButton() { return $('button=Register'); }
    get verificationCodeInput() { return $('#verificationCode'); }
    get verifyButton() { return $('button=Verify'); }
    get usernameInput() { return $('#username'); }
    get passwordInput() { return $('#password'); }
    get continueButton() { return $('button=Continue'); }
    get errorMessage() { return $('.error-message'); }

    // Métodos
    async open() {
        await browser.url('https://trello.com/signup');
    }
}

module.exports = new SignUpPage();