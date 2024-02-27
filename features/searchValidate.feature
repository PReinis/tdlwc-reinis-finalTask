Feature: Validating 'text contains' for items after searching

  @testcase2
  Scenario Outline: Users should be able to search a product using the search box at the top of the page. For
example, searching for "Blouse" should only find results containing text "Blouse"
    Given I am on the home page
    When I search for <searchFor>
    Then I see items containing text <searchFor>

    Examples:
    | searchFor |
    | Blouse    |
    | blouse    | # case in-sensitive
