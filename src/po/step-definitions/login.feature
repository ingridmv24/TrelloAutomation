Feature: User Login

Background:
    Given user navigates to the application

@successfulLogin
Scenario: Login with valid credentials
    And the user clicks on the login button in the header
    And the user enters valid "email" in the email field
    And the user clicks on the continue button
    And enters "password" in the password field
    And the user clicks on the login button
    Then the user should be redirected to the board

@unsuccessfulLogin
Scenario: Login with invalid credentials
    And the user clicks on the login button in the header
    And the user enters invalid "email" in the email field
    And the user clicks on the continue button
    When the user clicks on the sign up button
    Then the user should see an error message


