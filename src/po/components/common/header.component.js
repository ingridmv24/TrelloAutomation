const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent{
    constructor(){
        //super("#header[data-testid='authenticated-header']");
        super("div[class$='caTbTe']");
    }

    get loginHeaderBtn(){
        return this.rootElement.$("[data-uuid$='login']");
    }

    get homeBtn(){
    return this.rootElement.$("a[aria-label='Back to home']");
    }

    get createMenuBtn() {
        return this.rootElement.$("button[data-testid='header-create-menu-button']");
    }

    get menuMemberBtn(){
        return this.rootElement.$("[data-testid='header-member-menu-avatar']");
    }
}

module.exports = HeaderComponent;