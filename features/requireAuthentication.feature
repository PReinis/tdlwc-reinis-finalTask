Feature: Requires authentication to finish checkout for unregistered users
    @first
    Scenario: When an unregistered user tries to proceed with checkout after ordering some item, the page
should ask to create an account or sign in first, before letting the user finish the order.

        Given I am on the home page
        When I go to the Women section
        And I sort items by "In stock"
        And I choose an item
        And I change the item's size to "M"
        # And I add the item to the cart
        # And I choose to proceed to checkout
        # And I press "Proceed to checkout" on the checkout page
        # Then I am asked to sign in or create an account