  Feature: List Board Management

  Background:
    Given the user is logged in
    And the user is on an existing board

  @boardList
  @AddBoardList
  Scenario Outline: Create a new list within a board
    When the user enters a "<listName>" in the list name input
    And clicks on Add list button
    Then the new list should be added successfully

    Examples:
      | listName        |
      | new list board  |