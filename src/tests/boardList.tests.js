const { Given, When, Then } = require('@wdio/cucumber-framework')
const { expect } = require('chai');
const { pages } = require('../po')
const testData = require('./../utils/testData');

const { INPUT_VALUES} = testData;
let boardPage = pages('board');

Given('the user is on an existing board', async () => {
    await boardPage.clickOnCreateButton();
    await boardPage.clickOnCreateBoardButton();
    await boardPage.setBoardTitle(INPUT_VALUES.boardTitle);
    await boardPage.clickOnCreateBoardSubmitButton();
    await boardPage.setBoardTitle(INPUT_VALUES.boardTitle);
    await boardPage.clickOnCreateBoardSubmitButton();
});

// When('the user clicks on Add another list button', async () => {
//     await boardPage.clickOnAddAnotherListButton();
// });

When('the user enters a {string} in the list name input', async (listName) => {
    await boardPage.enterListNameBoard(listName);
});

When('clicks on Add list button', async () => {
    await boardPage.clickOnaddListButton();
});

Then('the new list should be added successfully', async () => {
    const actualBoardListName = await boardPage.extractNewListBoardTitle();
    //const expectedBoardListName = ;
    expect(actualBoardListName, expectedBoardListName).to.include(listName);
});
