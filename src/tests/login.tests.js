const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const { pages } = require("../po");
const testData = require("./../utils/testData");

const { VALID_CREDENTIALS, INVALID_CREDENTIALS, MESSAGES } = testData;
let loginPage = pages("login");
let workSpacePage = pages("workspace");

Given("user navigates to the application", async () => {
  await loginPage.open();
  await browser.maximizeWindow();
});

Given("the user clicks on the login button in the header", async () => {
  await loginPage.clickOnloginHeaderBtn();
});

Given("the user enters valid {string} in the email field", async (emailKey) => {
  const email = VALID_CREDENTIALS[emailKey];
  await loginPage.setEmail(email);
});

Given(
  "the user enters invalid {string} in the email field",
  async (emailKey) => {
    const email = INVALID_CREDENTIALS[emailKey];
    await loginPage.setEmail(email);
  },
);

Given("the user clicks on the continue button", async () => {
  await loginPage.clickOnContinueButton();
});

Given("enters {string} in the password field", async (passwordKey) => {
  const password = VALID_CREDENTIALS[passwordKey];
  await loginPage.setPassword(password);
});

Given("the user clicks on the login button", async () => {
  await loginPage.clickOnLogInButton();
  //Verify and handle two-step verification if it appears
  await loginPage.handleOptionalTwoStepVerification();
});

When("the user clicks on the sign up button", async () => {
  await loginPage.clickOnSignUpButton();
});

Then("the user should be redirected to the board", async () => {
  await workSpacePage.waitForWorkSpaceTitle();
  const isTitleVisible = await workSpacePage.isUserLoggedIn();
  expect(isTitleVisible).to.be.true;
});

Then("the user should see an error message", async () => {
  const actualErrorMessage = await loginPage.extractInvalidEmailText();
  const expectedErrorMessage = MESSAGES.errorInvalidEmail;
  expect(actualErrorMessage).to.equals(expectedErrorMessage);
});
