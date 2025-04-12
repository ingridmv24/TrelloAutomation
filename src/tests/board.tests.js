const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const { pages } = require("../po");
const testData = require("./../utils/testData");

const { VALID_CREDENTIALS, TITLES_VALIDATION, MESSAGES } = testData;
let loginPage;
let boardPage;

loginPage = pages("login");
boardPage = pages("board");

Given("the user is logged in", async () => {
  await loginPage.open();
  await browser.maximizeWindow();
  await loginPage.clickOnloginHeaderBtn();

  const email = VALID_CREDENTIALS.email;
  await loginPage.setEmail(email);

  await loginPage.clickOnContinueButton();

  const password = VALID_CREDENTIALS.password;
  await loginPage.setPassword(password);

  await loginPage.clickOnLogInButton();
  
  //Verify and handle two-step verification if it appears
  await loginPage.handleOptionalTwoStepVerification();
  
});

When("the user clicks on Create button", async () => {
  await boardPage.clickOnCreateButton();
});

When("clicks on Create board", async () => {
  await boardPage.clickOnCreateBoardButton();
});

When(
  "enters a board title {string} in the Board title input field",
  async (title) => {
    const boardTitle = title;
    await boardPage.setBoardTitle(boardTitle);
  },
);

When("clicks on the Create submit button", async () => {
  await boardPage.clickOnCreateBoardSubmitButton();
});

Then("the new board title should be displayed", async () => {
  const actualBoardName = await boardPage.extractBoardTitleText();
  const expectedBoardName = TITLES_VALIDATION.boardTitle;
  expect(actualBoardName).to.equals(expectedBoardName);
});

When("leaves the board name empty", async () => {
  await boardPage.clearBoardTitle();
});

Then("an validation message should be displayed", async () => {
  const boardTitleValidarionText =
    await boardPage.extractBoardTitleValidation();
  const expectedBoardTitleValidationText = MESSAGES.boardTitleValidationMessage;
  expect(boardTitleValidarionText).to.equal(expectedBoardTitleValidationText);
});
