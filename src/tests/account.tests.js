const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const { pages } = require("../po");
const testData = require("./../utils/testData");

const { INPUT_VALUES, MESSAGES } = testData;
let accountPage = pages("account");

When("the user clicks on the profile icon", async () => {
  await accountPage.clickOnHeaderMemberButton();
});

When("the user edits the profile and visibily", async () => {
  await accountPage.clickOnProfileAndVisibilityButton();
  await accountPage.updateProfileInfo(
    INPUT_VALUES.userName,
    INPUT_VALUES.bioDescription,
  );
});

When("the user clicks on save button", async () => {
  await accountPage.clickOnSaveButton();
});

Then("a success message is displayed", async () => {
  const actualAlertBioInfo = await accountPage.getAlertInfoSaved();
  const expectedAlertBioInfo = MESSAGES.alertTextBioInfo;
  expect(actualAlertBioInfo).to.deep.equal(expectedAlertBioInfo);
});
