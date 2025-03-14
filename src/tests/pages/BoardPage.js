class BoardPage {
    // Selectors
    get createButton() { return $("span[data-testid='AddIcon']"); }
    get createBoardOption() { return $("button[data-testid='header-create-board-button']"); }
    get boardTitleInput() { return $("input[data-testid='create-board-title-input']"); }
    get confirmCreateButton() { return $("button[data-testid='create-board-submit-button']"); }
    get boardTitleHeader() { return $("h1[data-testid='board-name-display']"); }
    get errorMessage() { return $('div.lWu5grh2rIDIym p'); }

    // Methods
    async clickOnCreateButton() {
        await browser.execute("arguments[0].click();", await this.createButton);
    }

    async clickCreateBoardOption() {
        await this.createBoardOption.waitForDisplayed();
        await this.createBoardOption.click();
    }

    async enterBoardTitle(title) {
        await this.boardTitleInput.waitForDisplayed();
        await this.boardTitleInput.setValue(title);
    }

    async clickConfirmCreateButton() {
        await this.confirmCreateButton.waitForDisplayed({ timeout: 5000 });
        await this.confirmCreateButton.click();
    }

    async getBoardTitle() {
        return await this.boardTitleHeader.getText();
    }

    async clearBoardTitle() {
        await this.boardTitleInput.clearValue();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}

module.exports = new BoardPage();
