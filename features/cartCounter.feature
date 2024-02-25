Feature: Cart's counter updates after adding an item
    @third
    Scenario: The cart should correctly show the number of items. When a user adds one product to a cart,
the counter on the cart should increase by 1.

        Given I am on the home page
        And I have logged in as Tomass
        And I add an item to carts
        And I have an empty cart
        When I add an item to cart
        # And I add an item to cart