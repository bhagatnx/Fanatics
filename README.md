# Fanatics

This project showcases our collaborative automation efforts to test
Fanatics.

Authors:

- Nishan Bhagat

To execute these tests:

1. Install dependencies: `npm i`
1. Execute the tests: `npx jest`

## Summary

This project was put together to test some features on Fanatics. It uses Jest as a test
runner, and Selenium Webdriver to hook into the browser.

## Setup

This is how to set up my project.

1. git clone https://github.com/bhagatnx/Fanatics
1. `npm i`

## Running Tests

To run all the tests, use the command: `npx jest`

To run a specific test, use the command: `npx jest test_name`

## What Do We Test

The functionality tested were the tabs, search bar, logo icon, cart(add or delete item), checkout process.

### Page Object

I made a Page Object for all the selectors and methods used in the test.