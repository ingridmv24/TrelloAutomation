Feature: Board Management

Background:
Given the user is logged in

@createBoard
Scenario: Create a new board
    When the user clicks on Create button
    And clicks on Create board
    And enters a board title "Test Board" in the Board title input field
    And clicks on the Create button
    Then the new board title should be displayed

@createBoardWithoutName
Scenario: Create a board without a name
    When the user clicks on Create button
    And clicks on Create board
    And leaves the board name empty
    Then an "error message" should be displayed
