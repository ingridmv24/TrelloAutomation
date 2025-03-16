const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent{
    constructor(){
        super("#header[data-testid='authenticated-header']");
    }

    get homeBtn(){
    return this.rootElement.$("a[aria-label='Back to home']");
    }

    get createMenuBtn() {
        return this.rootElement.$("button[data-testid='header-create-menu-button']");
    }
}

module.exports = HeaderComponent;