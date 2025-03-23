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

    get addAnotherListBtn(){
        return this.rootElement.$("button[data-testid='list-composer-button']");
    }

    get listNameInput(){
        return this.rootElement.$("[data-testid='list-name-textarea']");
    }

    get addListBtn(){
        return this.rootElement.$("button[data-testid='list-composer-add-list-button']");
    }

    get newBoardListTitle(){
        return this.rootElement.$("#board li[data-testid='list-wrapper']:nth-child(4)");
    }
}

module.exports = BoardComponent;