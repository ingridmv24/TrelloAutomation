Feature: User Profile Management

  Background:
    Given the user is logged in

  @editProfile
  Scenario: Edit user profile
    When the user clicks on the profile icon
    And clicks on the "Profile and visibility" option
    And enters a description "Test User Bio" in the "Bio" field
    And the user clicks on "Save" button
    Then a notification with the message "Saved" is displayed
    And the changes should be saved successfully
