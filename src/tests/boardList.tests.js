const { Given, When, Then } = require('@wdio/cucumber-framework')
const { expect } = require('chai');
const { pages } = require('../po')
const testData = require('./../utils/testData');

const { TITLES_VALIDATION} = testData;
let boardPage = pages('board');

Given('the user is on an existing board', async () => {
    await boardPage.clickOnCreateButton();
    await boardPage.clickOnCreateBoardButton();
    await boardPage.setBoardTitle(TITLES_VALIDATION.boardTitle);
    await boardPage.clickOnCreateBoardSubmitButton();
});

When('the user enters a {string} in the list name input', async (listName) => {
    await boardPage.enterListNameBoard(listName);
});

When('clicks on Add list button', async () => {
    await boardPage.clickOnaddListButton();
});

Then('the new list should be added successfully', async () => {
    const actualBoardListName = await boardPage.extractNewListBoardTitle();
    const expectedBoardListName = testData.TITLES_VALIDATION.boardListName;
        expect(actualBoardListName).to.include(
            expectedBoardListName,
            `Expected list name to include "${expectedBoardListName}" but found "${actualBoardListName}"`
        );
});
