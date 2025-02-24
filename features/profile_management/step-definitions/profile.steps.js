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

When('clicks on the {string} option', async () => {
    await ProfilePage.openProfileSettings();
});

When('enters a description {string} in the {string} field', async (description) => {
    await ProfilePage.updateBio(description);
});

When('the user clicks on {string} button', async () => {
    await ProfilePage.saveChanges();
});

Then('a notification with the message {string} is displayed', async (expectedMessage) => {
    const message = await ProfilePage.getSuccessMessage();
    expect(message).to.equal(expectedMessage);
});

Then('the changes should be saved successfully', async () => {
    const savedText = await ProfilePage.bioField.getValue();
    expect(savedText).to.equal('Test User Bio');
});
