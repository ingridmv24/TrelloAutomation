import ProfilePage from "./ProfilePage";

class LogoutPage{

    // Selectors
    get logoutButton() { return $("button[data-testid='account-menu-logout']"); }
    get logoutMessage() { return $('#ProductHeadingSuffix'); }

    // Methods
    async logout() {
        await ProfilePage.profileIcon.waitForClickable({ timeout: 5000 });
        await ProfilePage.profileIcon.click();
        await this.logoutButton.waitForClickable({ timeout: 5000 });
        await this.logoutButton.click();
        await this.logoutMessage.waitForDisplayed({ timeout: 5000 });
    }
}
module.exports = new LogoutPage();