const BaseComponent = require("../common/base.component");

class ProfileAndVisibilityComponent extends BaseComponent {
    constructor() {
        super("form[data-testid='profile-form']");
    }

    get userNameInput() {
        return this.rootElement.$("#username");
    }

    get biographyInput() {
        return this.rootElement.$("#bio");
    }

    get saveBtn() {
        return this.rootElement.$("button[type='submit']");
    }

    get alertInfoSaved() {
        return $("//span[@class='QMKgZFIlTLiEJN']");
    }
}

module.exports = ProfileAndVisibilityComponent;