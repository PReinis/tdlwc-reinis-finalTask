Feature: Cart's counter updates after adding an item
    @testcase3
    Scenario: The cart should correctly show the number of items. When a user adds one product to a cart,
the counter on the cart should increase by 1.

        Given I am on the home page
        When I add an item to cart
        Then The number of items in cart increases by 1
        And I add another item to cart
        Then The number of items in cart increases by 1