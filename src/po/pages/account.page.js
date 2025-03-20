const BasePage = require("./base.page");
const { Header, ProfileAndVisibility, AccountMenu } = require('./../components');

class Accountpage extends BasePage{
    constructor(){
        super()
        this.header = new Header();
        this.profileAndVisibility = new ProfileAndVisibility();
        this.accountMenu = new AccountMenu();
    }

    async clickOnHeaderMemberButton(){
        await this.header.menuMemberBtn.click();
    }

    async clickOnProfileAndVisibilityButton(){
        await this.accountMenu.profileAndVisibilityBtn.click();
    }

    async enterUsername(username) {
        await this.profileAndVisibility.userNameInput.setValue(username);
    }

    async enterBioDescription(biographyDescription) {
        await this.profileAndVisibility.biographyInput.setValue(biographyDescription);
    }

    async updateProfileInfo(username,biographyDescription){
        await this.enterUsername(username);
        await this.enterBioDescription(biographyDescription);
    }

    async clickOnSaveButton(){
        await this.profileAndVisibility.saveBtn.click();
    }

    async getAlertInfoSaved(){
        await this.profileAndVisibility.alertInfoSaved.waitForDisplayed();
        const alertText = this.profileAndVisibility.alertInfoSaved.getText();
        return alertText;
    }
}

module.exports = Accountpage;