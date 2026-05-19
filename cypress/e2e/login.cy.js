describe('Login Tests - SauceDemo', () => {

  // Login Test 1 - Valid Login
  it('Login Test 1: Valid username and password', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory')
    cy.get('.title').should('be.visible')
  })

  // Login Test 2 - Wrong Password
  it('Login Test 2: Incorrect password shows error', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('wrongpassword')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]')
      .should('contain', 'Username and password do not match')
  })

  // Login Test 3 - Empty Fields
  it('Login Test 3: Empty fields shows validation', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]')
      .should('contain', 'Username is required')
  })

})
