const HomeWorkSpacePage = require('./../pages/home-workspace.page');
const LoginPage = require('./../pages/login.page');

const pageInstances = {
    homeworkspace: new HomeWorkSpacePage(),
    login: new LoginPage()
};

function pages(name) {
    return pageInstances[name.toLowerCase()];
}

module.exports = { pages };
