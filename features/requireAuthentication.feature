Feature: Requires authentication to finish checkout for unregistered users
    @testcase1
    Scenario: When an unregistered user tries to proceed with checkout after ordering some item, the page
should ask to create an account or sign in first, before letting the user finish the order.

        Given I am on the home page
        When I go to the Women section
        And I sort items by 'In stock'
        And I choose the first item
        And I change the item's attributes
        And I add the item to the cart
        And I choose to proceed to checkout
        And I press proceed to checkout button on the cart page
        Then I am asked to sign in or create an account