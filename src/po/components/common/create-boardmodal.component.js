const BaseComponent = require("./base.component");

class BoardModalComponent extends BaseComponent {
    constructor() {
        super("section[data-testid$='create-menu-popover']");
    }

    get headerCreateBoardBtn() {
        return this.rootElement.$("button[data-testid$='create-board-button']");
    }

    get boardTitleInput() {
        return this.rootElement.$("input[data-testid='create-board-title-input']");
    }

    get createBoardSubmitBtn() {
        return this.rootElement.$("button[data-testid='create-board-submit-button']");
    }
}

module.exports = BoardModalComponent;