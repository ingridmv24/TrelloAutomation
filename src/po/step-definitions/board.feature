Feature: Board Management

Background:
Given the user is logged in

@board
@createNewBoard
Scenario: Create a new board
    When the user clicks on Create button
    And clicks on Create board
    And enters a board title "New board test" in the Board title input field
    And clicks on the Create submit button
    Then the new board title should be displayed

@board
@createBoardWithoutName
Scenario: Create a board without a name
    When the user clicks on Create button
    And clicks on Create board
    And leaves the board name empty
    Then an validation message should be displayed