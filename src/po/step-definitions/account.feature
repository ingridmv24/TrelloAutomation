Feature: User Profile Management

Background:
Given the user is logged in

@editProfile
Scenario: Edit user profile
    When the user clicks on the profile icon
    And enters a description "Test User Bio" in the Bio field
    And the user clicks on save button
    Then a success message is displayed
