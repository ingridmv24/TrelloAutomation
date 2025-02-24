const { Given, When, Then } = require('@wdio/cucumber-framework');
const BoardPage = require('../../pages/BoardPage');
const LoginPage = require('../../pages/LoginPage');
const HomePage = require('../../pages/HomePage');

Given('the user is logged in', async () => {
    await LoginPage.login("testautomation270@gmail.com", "TestUser*");
    await HomePage.waitForHomePage();
});