const BasePage = require('./../pages/base.page');
const { HomeWorkSpace } = require('./../components');

class HomeWorkSpacePage extends BasePage {
    constructor() {
        super('/w/userworkspace45640014/home')
        this.homeWorkspace = new HomeWorkSpace();
    }

    async waitForWorkSpaceTitle() {
        await this.homeWorkspace.workSpaceTitle.waitForDisplayed({ timeout: 10000 });
    }

    async isUserLoggedIn() {
        return this.homeWorkspace.workSpaceTitle.isDisplayed();
    }
}

module.exports = HomeWorkSpacePage;

