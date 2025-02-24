import ProfilePage from "./ProfilePage";

class LogoutPage{

    // Selectors
    get logoutButton() { return $("button[data-testid='account-menu-logout']"); }

    // Methods
    async logout() {
        await ProfilePage.profileIcon.click();
        await this.logoutButton.click();
    }
}
module.exports = new LogoutPage();