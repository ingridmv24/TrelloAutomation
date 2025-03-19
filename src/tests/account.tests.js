const { Given, When, Then } = require('@wdio/cucumber-framework')
const { expect } = require('chai');
const { pages } = require('../po')
const testData = require('../../utils/testData');

const { VALID_CREDENTIALS, INPUT_VALUES, MESSAGES } = testData;
let loginPage;
let accountPage;

loginPage = pages('login'); 
accountPage = pages('account')

Given('the user is logged in', async () => {
    await loginPage.open();
    await browser.maximizeWindow();
    await loginPage.clickOnloginHeaderBtn();

    const email = VALID_CREDENTIALS.email; 
    await loginPage.setEmail(email);

    await loginPage.clickOnContinueButton();

    const password = VALID_CREDENTIALS.password;
    await loginPage.setPassword(password);

    await loginPage.clickOnLogInButton();
});


When('the user clicks on the profile icon', async () => {
    await accountPage.clickOnHeaderMemberButton();
});

When('enters a description {string} in the Bio field', async (description) => {
    await accountPage.updateBio(description);
});

When('the user clicks on save button', async () => {
    await accountPage.saveChanges();
});

Then('a success message is displayed', async () => {
    const message = await accountPage.getSuccessMessage();
    expect(message).to.equal("Saved");
});