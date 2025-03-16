class HomePage {
    // Selectors
    get boardsButton() { return $('.home-left-sidebar-container span.icon-board'); } 

    // Methods
    async waitForHomePage() {
        await this.boardsButton.waitForDisplayed({ timeout: 10000 });
    }

    async isUserLoggedIn() {
        return this.boardsButton.isDisplayed();
    }
}

module.exports = new HomePage();
