describe('Task 2 - Assertions Aliases and Custom Commands', () => {

  // beforeEach Hook - runs before every test
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  // Assertion 1 - be.visible
  it('Assertion 1: Login button is visible on page', () => {
    cy.get('[data-test="login-button"]')
      .should('be.visible')
  })

  // Assertion 2 - have.text
  it('Assertion 2: Login button has correct text', () => {
    cy.get('[data-test="login-button"]')
      .should('have.value', 'Login')
  })

  // Assertion 3 - have.attr
  it('Assertion 3: Username field has placeholder attribute', () => {
    cy.get('[data-test="username"]')
      .should('have.attr', 'placeholder', 'Username')
  })

  // Negative Assertion
  it('Negative Assertion: Error message does not exist on fresh page load', () => {
    cy.get('[data-test="error"]')
      .should('not.exist')
  })

  // Alias Practice
  it('Alias: Save username and password fields as aliases', () => {
    cy.get('[data-test="username"]').as('usernameField')
    cy.get('[data-test="password"]').as('passwordField')
    cy.get('@usernameField').type('standard_user')
    cy.get('@passwordField').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory')
  })

  // Custom Command Test
  it('Custom Command: Login using reusable custom command', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory')
  })

})
