const { Given, When, Then, After } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');
const HomePage = require('../../pages/HomePage');
const LogoutPage = require('../../pages/LogoutPage');

Given('the user is logged in', async () => {
    await LoginPage.login("testautomation270@gmail.com", "TestUser*");
    await HomePage.waitForHomePage();
});

After(async () => {
    console.log("Executing logout...");
    
    const isLogoutButtonDisplayed = await LogoutPage.logoutButton.isDisplayed();
    if (isLogoutButtonDisplayed) {
        await LogoutPage.logout();
    }

    await browser.reloadSession();
});

