const { Given, When, Then } = require('@wdio/cucumber-framework');
const BoardPage = require('../../pages/BoardPage');
const LoginPage = require('../../pages/LoginPage');
const HomePage = require('../../pages/HomePage');
const { expect } = require('chai');


When('the user clicks on Create button', async () => {
    await BoardPage.clickCreateButton();
});

When('clicks on Create board', async () => {
    await BoardPage.clickCreateBoardOption();
});

When('enters a board title {string} in the Board title input field', async (title) => {
    await BoardPage.enterBoardTitle(title);
});

When('clicks on the Create button', async () => {
    await BoardPage.clickConfirmCreateButton();
});

Then('the new board title should be displayed', async () => {
    const boardTitle = await BoardPage.getBoardTitle();
    expect(boardTitle).to.equal("Test Board");
});

When('leaves the board name empty', async () => {
    await BoardPage.clearBoardTitle();
});

Then('an error message {string} should be displayed', async (errorMessage) => {
    const errorText = await BoardPage.getErrorMessage();
    const expectedErrorText = '👋Board title is required'
    expect(errorText).to.equal(expectedErrorText);
});
