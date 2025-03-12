Feature: User Login

Background:
    Given user navigates to the application

@successfulLogin
Scenario: Successful Login
    And the user enters "testautomation270@gmail.com" in the email field
    And the user clicks on the continue button
    And enters "TestUser*" in the password field
    And the user clicks on the login button
    Then the user should be redirected to the homepage

@unsuccessfulLogin
Scenario: Unsuccessful Login with Invalid Credentials
    And the user enters "invaliduser@com" in the email field
    And the user clicks on the continue button
    When the user clicks on the sign up button
    Then the user should see an error message


