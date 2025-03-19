Feature: User Login

Background:
    Given user navigates to the application

@successfulLogin
Scenario: Successful Login
    And the user clicks on the login button in the header
    And the user enters valid "email" in the email field
    And the user clicks on the continue button
    And enters "password" in the password field
    And the user clicks on the login button
    Then the user should be redirected to the homepage

@unsuccessfulLogin
Scenario: Unsuccessful Login with Invalid Credentials
    And the user clicks on the login button in the header
    And the user enters invalid "email" in the email field
    And the user clicks on the continue button
    When the user clicks on the sign up button
    Then the user should see an error message


