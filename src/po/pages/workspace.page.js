const BasePage = require('./base.page');
const { WorkSpace } = require('../components');

class WorkSpacePage extends BasePage {
    constructor() {
        super('/w/userworkspace45640014/home')
        this.workspace = new WorkSpace();
    }

    async waitForWorkSpaceTitle() {
        await this.workspace.workSpaceTitle.waitForDisplayed({ timeout: 10000 });
    }

    async isUserLoggedIn() {
        return this.workspace.workSpaceTitle.isDisplayed();
    }

    async extractBoardName(){
        const boardNameText = await this.workspace.boardName.getText();
        return boardNameText;
    }
}

module.exports = WorkSpacePage;

