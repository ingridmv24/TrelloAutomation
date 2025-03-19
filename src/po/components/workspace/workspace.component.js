const BaseComponent = require("../common/base.component");

class HomeWorkSpaceComponent extends BaseComponent {
    constructor() {
        super(".board-main-content");
    }

    get boardName(){
        return this.rootElement.$('[data-testid="board-name-display"]');
    }
}
module.exports = HomeWorkSpaceComponent;