const BasePage = require("./base.page");
const { CreateBoardModal, WorkSpace } = require('./../components');


class BoardPage extends BasePage{
    constructor(){
        super()
        this.createBoardModal = new CreateBoardModal();
        this.workSpace = new WorkSpace();
    }

    async clickOnCreateButton(){
        await this.createBoardModal.headerCreateBtn.waitForDisplayed();
        await this.createBoardModal.headerCreateBtn.click();
    }

    async clickOnCreateBoardButton(){
        await this.createBoardModal.createBoardBtn.waitForDisplayed({ timeout: 5000 });
        await this.createBoardModal.createBoardBtn.click();
    }

    async setBoardTitle(boardTitle){
        await this.createBoardModal.boardTitleInput.waitForDisplayed();
        await this.createBoardModal.boardTitleInput.setValue(boardTitle);
    }

    async clearBoardTitle() {
        await this.createBoardModal.boardTitleInput.clearValue();
    }

    async clickOnCreateBoardSubmitButton(){
        await this.createBoardModal.createBoardSubmitBtn.waitForDisplayed();
        await this.createBoardModal.createBoardSubmitBtn.click();
    }

    async extractBoardTitleText(){
        const boardTitle = await this.workSpace.boardName.getText();
        return boardTitle;
    }

    async extractBoardTitleValidation(){
        const boardTitleValidation = await this.createBoardModal.boardTitleValidation.getText();
        return boardTitleValidation;
    }
}
module.exports = BoardPage;