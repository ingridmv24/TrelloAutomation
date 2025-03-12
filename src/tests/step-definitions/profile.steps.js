const { Given, When, Then } = require('@wdio/cucumber-framework');
const ProfilePage = require('.../../../pages/ProfilePage');
const { expect } = require('chai');

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
