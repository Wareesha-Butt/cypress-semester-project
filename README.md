# cypress-semester-project

# Cypress E2E Testing Project

## Website Tested
SauceDemo - https://www.saucedemo.com

## How to Install
npm install

## How to Run Tests
npx cypress open

## Task 1 — UI Test Suite

### Test Files:
- cypress/e2e/login.cy.js — 3 Login tests
- cypress/e2e/navigation.cy.js — 2 Navigation tests
- cypress/e2e/form.cy.js — 1 Form test

### Test Cases:
| Test | What it Tests |
|------|--------------|
| Login Test 1 | Valid login redirects to inventory |
| Login Test 2 | Wrong password shows error |
| Login Test 3 | Empty fields shows validation |
| Navigation Test 1 | Products page heading correct |
| Navigation Test 2 | Visit 2 pages in sequence |
| Form Test 1 | Checkout form submission works |


## Task 2 — Assertions Aliases and Custom Commands

### New Test File:
- cypress/e2e/task2.cy.js

### What Task 2 covers:
| Exercise | Description |
|----------|-------------|
| Assertion 1 | Login button is visible - should('be.visible') |
| Assertion 2 | Button text check - should('have.value') |
| Assertion 3 | Attribute check - should('have.attr') |
| Negative Assertion | Error does not exist - should('not.exist') |
| Alias Practice | Save element as alias and reuse it |
| Custom Command | cy.login() reusable command |
| beforeEach Hook | cy.visit() runs before every test |

### How to run Task 2 tests:
npx cypress open
Then click task2.cy.js

## Difficult Thing Paragraph
The most challenging part of Task 2 was understanding how aliases 
work in Cypress. Initially it was unclear why cy.get('@alias') needed 
the @ symbol instead of a regular JavaScript variable. After reading 
the Cypress documentation it became clear that aliases are stored in 
Cypress internal context and must be accessed using the @ prefix so 
Cypress can properly queue and resolve them in the correct order. Once 
this was understood aliases became very useful for avoiding repetition 
of long CSS selector strings throughout a test file.
