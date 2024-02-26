Feature: Validating 'text contains' for items after searching

  @testcase2
  Scenario: Users should be able to search a product using the search box at the top of the page. For
example, searching for "Blouse" should only find results containing text "Blouse"
    Given I am on the home page
    And I have logged in as Tomass
    When I search for "blouse"
    Then I see items containing text "blouse"
