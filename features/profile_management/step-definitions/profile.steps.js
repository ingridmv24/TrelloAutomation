const { Given, When, Then } = require('@wdio/cucumber-framework');
const ProfilePage = require('../../../pages/ProfilePage');
const LoginPage = require('../../../pages/LoginPage');
const HomePage = require('../../../pages/HomePage');
const { expect } = require('chai');

Given('the user is logged in', async () => {
    await LoginPage.login("testautomation270@gmail.com", "TestUser*");
    await HomePage.waitForHomePage();
});

When('the user clicks on the profile icon', async () => {
    await ProfilePage.openProfileSettings();
});

When('enters a description {string} in the Bio field', async (description) => {
    await ProfilePage.updateBio(description);
});

When('the user clicks on save button', async () => {
    await ProfilePage.saveChanges();
});

Then('a success message is displayed', async () => {
    const message = await ProfilePage.getSuccessMessage();
    expect(message).to.equal("Saved");
});
