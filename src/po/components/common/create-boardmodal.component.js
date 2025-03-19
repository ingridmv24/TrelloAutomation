const BaseComponent = require("./base.component");

class BoardModalComponent extends BaseComponent {
    constructor() {
        super("section[data-testid$='create-menu-popover']");
    }

    get headerCreateBtn() {
        return $("[data-testid='header-create-menu-button']");
    }

    get createBoardBtn() {
        return this.rootElement.$("button[data-testid='header-create-board-button'] div[class='kgXqyT2weJmrQm']");
    }

    get createBoardSubmitBtn() {
        return this.rootElement.$("button[data-testid='create-board-submit-button']");
    }

    get boardTitleInput() {
        return this.rootElement.$("input[data-testid='create-board-title-input']");
    }

    get boardTitleValidation(){
        return this.rootElement.$("div.lWu5grh2rIDIym p");
    }
}

module.exports = BoardModalComponent;