# TDL Winter School Final Task
This is my Final Task for TDL Winter School.
This project tests some functionality of the website: http://automationpractice.pl

## How to Install
To get started, run the following command:
```
npm install
```
## How to Run the Tests
To run the tests run the command:
```
npm run wdio
```
## How to View Reports
After running the tests you can generate and view the report using the command:
```
npm run allure
```
# Test Cases

## Test Case 1
When an unregistered user tries to proceed with checkout after ordering some item, the page
should ask to create an account or sign in first, before letting the user finish the order.

To run this test individually run the command:
```
npm run tag -- "@testcase1"
```
## Test Case 2
Users should be able to search a product using the search box at the top of the page. For
example, searching for "Blouse" should only find results containing text "Blouse"

To run this test individually run the command:
```
npm run tag -- "@testcase2"
```
## Test Case 3
The cart should correctly show the number of items. When a user adds one product to a cart,
the counter on the cart should increase by 1.

To run this test individually run the command:
```
npm run tag -- "@testcase3"
```
## Test Case 4
When there is 1 item in the cart, if the user removes an item from the cart, it now
should display that there are no items anymore

To run this test individually run the command:
```
npm run tag -- "@testcase4"
```