const BaseComponent = require("../common/base.component")

class BoardComponent extends BaseComponent{
    constructor(){
        super(".board-main-content");
    }

    get boardHeader(){
        return this.rootElement.$(".board-header");
    }

    get boardName(){
        return this.rootElement.$("h1[data-testid='board-name-display']");
    }
    


}