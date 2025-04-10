const BasePage = require("./base.page");
const { CreateBoardModal, WorkSpace, Board } = require("./../components");

class BoardPage extends BasePage {
  constructor() {
    super();
    this.createBoardModal = new CreateBoardModal();
    this.workSpace = new WorkSpace();
    this.board = new Board();
  }

  async clickOnCreateButton() {
    await this.createBoardModal.headerCreateBtn.waitForDisplayed();
    await this.createBoardModal.headerCreateBtn.click();
  }

  async clickOnCreateBoardButton() {
    await this.createBoardModal.createBoardBtn.waitForDisplayed({
      timeout: 5000,
    });
    await this.createBoardModal.createBoardBtn.click();
  }

  async setBoardTitle(boardTitle) {
    await this.createBoardModal.boardTitleInput.waitForDisplayed();
    await this.createBoardModal.boardTitleInput.setValue(boardTitle);
  }

  async clearBoardTitle() {
    await this.createBoardModal.boardTitleInput.clearValue();
  }

  async clickOnCreateBoardSubmitButton() {
    await this.createBoardModal.createBoardSubmitBtn.waitForDisplayed({
      timeout: 10000,
    });
    await this.createBoardModal.createBoardSubmitBtn.click();
  }

  async extractBoardTitleText() {
    await this.workSpace.boardName.waitForDisplayed();
    const boardTitle = await this.workSpace.boardName.getText();
    return boardTitle;
  }

  async extractBoardTitleValidation() {
    const boardTitleValidation =
      await this.createBoardModal.boardTitleValidation.getText();
    return boardTitleValidation;
  }

  async clickOnAddAnotherListButton() {
    await this.board.addAnotherListBtn.click();
  }

  async enterListNameBoard(listName) {
    await this.board.listNameInput.setValue(listName);
  }

  async clickOnaddListButton() {
    await this.board.addListBtn.click();
  }

  async extractNewListBoardTitle() {
    await this.board.newBoardListTitle.waitForDisplayed();
    const listBoardTitleText = await this.board.newBoardListTitle.getText();
    return listBoardTitleText;
  }
}
module.exports = BoardPage;
