class ProfilePage {
    // Selectors
    get profileIcon() { return $("div[title*='account']"); }
    get profileVisibilityOption() { return $("[data-testid='account-menu-profile']"); }
    get bioField() { return $('#bio'); }
    get saveButton() { return $("button[type='submit']"); }
    get successMessage() { return $("//span[@class='QMKgZFIlTLiEJN']"); }

    // Methods
    async openProfileSettings() {
        await this.profileIcon.click();
        await this.profileVisibilityOption.waitForDisplayed();
        await this.profileVisibilityOption.click();
    }

    async updateBio(description) {
        await this.bioField.waitForDisplayed();
        await this.bioField.setValue(description);
    }

    async saveChanges() {
        await this.saveButton.click();
    }

    async getSuccessMessage() {
        return await this.successMessage.getText();
    }
}

module.exports = new ProfilePage();
