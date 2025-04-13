Feature: User Profile Management

Background:
Given the user is logged in

@profile
@editProfile
Scenario: Edit user profile
    When the user clicks on the profile icon
    And the user edits the profile and visibily
    And the user clicks on save button
    Then a success message is displayed
