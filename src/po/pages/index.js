const BoardPage = require("./../pages/board.page");
const LoginPage = require("./../pages/login.page");
const WorkspacePage = require("./../pages/workspace.page");
const AccountPage = require("./../pages/account.page");
const pageInstances = {
  board: new BoardPage(),
  login: new LoginPage(),
  workspace: new WorkspacePage(),
  account: new AccountPage(),
};

function pages(name) {
  return pageInstances[name.toLowerCase()];
}
module.exports = { pages };
