Feature: Cart displays that there are no items in cart after removing all items from the cart
    @testcase4
    Scenario: When there is 1 item in the cart, if the user removes an item from the cart, it now
should display that there are no items anymore.

    Given I am on the home page
    When I add an item to cart
    And I remove items from cart
    Then I should see that the cart is empty