class ProfilePage {
    // Selectors
    get profileIcon() { return $("div[title*='account']"); }
    get profileVisibilityOption() { return $('css-selector-del-opcion'); }
    get bioField() { return $('css-selector-del-campo-bio'); }
    get saveButton() { return $('css-selector-del-boton-save'); }
    get successMessage() { return $('css-selector-del-mensaje-guardado'); }

    // Methods
    async openProfileSettings() {
        await this.profileIcon.click();
        await this.profileVisibilityOption.waitForDisplayed();
        await this.profileVisibilityOption.click();
    }

    async updateBio(description) {
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
