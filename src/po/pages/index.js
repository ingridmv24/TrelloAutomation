const BoardPage = require('./../pages/board.page');
const LoginPage = require('./../pages/login.page');
const WorkSpacePage = require('./../pages/workspace.page');

const pageInstances = {
    board: new BoardPage(),
    login: new LoginPage(),
    workspace: new WorkSpacePage()
};

function pages(name) {
    return pageInstances[name.toLowerCase()];
}

module.exports = { pages };
