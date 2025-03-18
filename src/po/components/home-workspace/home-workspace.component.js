const BaseComponent = require("../common/base.component");

class HomeWorkSpaceComponent extends BaseComponent {
    constructor() {
        super(".home-container");
    }

    get workSpaceTitle(){
        return this.rootElement.$("h2");
    }
}
module.exports = HomeWorkSpaceComponent;