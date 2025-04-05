const BaseComponent = require("../common/base.component");

class WorkspaceComponent extends BaseComponent {
  constructor() {
    super(".home-container");
  }

  get workSpaceTitle() {
    return this.rootElement.$("h2");
  }

  get boardName() {
    return $('[data-testid="board-name-container"]');
  }
}
module.exports = WorkspaceComponent;
