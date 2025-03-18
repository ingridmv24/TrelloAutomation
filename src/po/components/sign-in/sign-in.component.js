const BaseComponent = require("../common/base.component");

class SigninComponent extends BaseComponent {
    constructor() {
        super("#form-login");
    }

    get emailInput() {
        return this.rootElement.$("#username");
    }

    get continueButton() {
        return this.rootElement.$("#login-submit");
    }

    get passwordInput() {
        return this.rootElement.$("#password");
    }

    get loginButton() {
        return $("button#login-submit");
    }

    get signupButton() {
        return $("#signup-submit");
    }

    get invalidEmailErrorText(){
        return $("[aria-live='polite']");
    }
}
module.exports = SigninComponent;