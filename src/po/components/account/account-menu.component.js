const BaseComponent = require("../common/base.component");

class AccountMenuComponent extends BaseComponent {
  constructor() {
    super("[data-testid='account-menu']");
  }

  get profileAndVisibilityBtn() {
    return this.rootElement.$("[data-testid='account-menu-profile']");
  }
}
module.exports = AccountMenuComponent;
