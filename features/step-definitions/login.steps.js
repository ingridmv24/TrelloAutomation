const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');
const HomePage = require('../../pages/HomePage');
const { expect } = require('chai');

Given('user navigates to the application', async () => {
    await LoginPage.open();
    await browser.maximizeWindow();
});

Given('the user enters {string} in the email field', async (email) => {
    await LoginPage.setEmail(email);
});

Given('the user clicks on the continue button', async () => {
    await LoginPage.clickOnContinueButton();
});

Given('enters {string} in the password field', async (userPassword) => {
    await LoginPage.setPassword(userPassword);
});

Given('the user clicks on the login button', async () => {
    await LoginPage.clickOnLoginButton();
});

When('the user clicks on the sign up button', async () => {
    await LoginPage.clickOnSignUpButton();
});

Then('the user should be redirected to the homepage', async () => {
    await HomePage.waitForHomePage();
    const isVisible = await HomePage.isUserLoggedIn();
    expect(isVisible).to.be.true;
});

Then('the user should see an error message', async () => {
    const errorMessage = await LoginPage.getEmailErrorMessage();
    expect(errorMessage).to.equals('Please enter a valid email address');
});

