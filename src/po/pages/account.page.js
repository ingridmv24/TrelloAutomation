const BasePage = require("./base.page");
const { Header, ProfileAndVisibility } = require('./../components');

class accountpage extends BasePage{
    constructor(){
        super()
        this.header = new Header();
        this.ProfileAndVisibility = new ProfileAndVisibility();
    }

    async clickOnHeaderMemberButton(){
        await this.header.menuMemberBtn.click();
    }
}