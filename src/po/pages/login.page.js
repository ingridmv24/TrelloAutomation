const BasePage = require("./../pages/base.page");
const { Signin, Header } = require("./../components");

class LoginPage extends BasePage {
  constructor() {
    super("/en");
    this.logIn = new Signin();
    this.header = new Header();
  }

  async clickOnloginHeaderBtn() {
    await this.header.loginHeaderBtn.waitForExist({ timeout: 20000 });
    await this.header.loginHeaderBtn.click();
  }

  async setEmail(email) {
    await this.logIn.emailInput.waitForDisplayed();
    await this.logIn.emailInput.setValue(email);
  }

  async clickOnContinueButton() {
    await this.logIn.continueButton.waitForDisplayed();
    await this.logIn.continueButton.click();
  }

  async setPassword(password) {
    await browser.waitUntil(
      async () => await this.logIn.passwordInput.isDisplayed(),
      {
        timeout: 5000,
        timeoutMsg: "The input field dis not appear on time",
      },
    );
    await this.logIn.passwordInput.setValue(password);
  }

  async clickOnLogInButton() {
    await this.logIn.loginButton.click();
  }

  async handleOptionalTwoStepVerification() {
    const twoStepButton = await $('button#mfa-promote-dismiss');

    const twoStepButtonExists = await twoStepButton.waitForExist({ timeout: 5000, reverse: false }).catch(() => false);

    if (twoStepButtonExists && await twoStepButton.isDisplayed()) {
      await twoStepButton.waitForClickable({ timeout: 10000 });
      await twoStepButton.click();
      console.log('Clicked on "Continue without two-step verification".');

      await browser.waitUntil(
        async () => {
          return await $('#header[data-testid="authenticated-header"]').isDisplayed();
        },
        {
          timeout: 15000,
          timeoutMsg: 'Authenticated header did not appear after dismissing MFA prompt'
        }
      );
    } else {
      console.log('Two-step verification prompt not found or not visible.');
    }
  }


  async clickOnSignUpButton() {
    await this.logIn.signupButton.waitForDisplayed();
    await this.logIn.signupButton.waitForClickable();
    await this.logIn.signupButton.click();
  }

  async extractInvalidEmailText() {
    const errorEmailText = await this.logIn.invalidEmailErrorText.getText();
    return errorEmailText;
  }
}

module.exports = LoginPage;
