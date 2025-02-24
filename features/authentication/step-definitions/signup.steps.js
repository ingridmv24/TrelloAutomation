const { Given, When, Then } = require('@cucumber/cucumber');
const SignUpPage = require('../../../pages/SignUpPage');
const HomePage = require('../../../pages/HomePage');
const assert = require('chai').assert;

Given('the user is on the Trello sign-up page', async () => {
    await SignUpPage.open();
});

When('the user enters a valid email {string} in the email field', async (email) => {
    await SignUpPage.emailInput.setValue(email);
});

When('the user clicks on the {string} button', async (buttonText) => {
    if (buttonText === 'Register') {
        await SignUpPage.registerButton.click();
    }
});

Then('the user should receive a verification code in the email', async () => {
    // Simular la recepción del código de verificación
    await browser.pause(2000); // Esperar 2 segundos (simulación)
});

When('the user enters the verification code {string}', async (code) => {
    await SignUpPage.verificationCodeInput.setValue(code);
});

When('the user clicks on the {string} button', async (buttonText) => {
    if (buttonText === 'Verify') {
        await SignUpPage.verifyButton.click();
    }
});

When('the user enters a valid username {string} and password {string}', async (username, password) => {
    await SignUpPage.usernameInput.setValue(username);
    await SignUpPage.passwordInput.setValue(password);
});

When('the user clicks on the {string} button', async (buttonText) => {
    if (buttonText === 'Continue') {
        await SignUpPage.continueButton.click();
    }
});

Then('the user should be redirected to the home page', async () => {
    assert.isTrue(await HomePage.isHomePageDisplayed(), 'User was not redirected to the home page');
});

Then('an error message should be displayed {string}', async (errorMessage) => {
    const errorElement = await SignUpPage.errorMessage;
    assert.equal(await errorElement.getText(), errorMessage, 'Error message is not correct');
});