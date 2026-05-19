describe('Form Tests - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  // Form Test 1
  it('Form Test 1: Fill checkout form and see summary', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Wareesha')
    cy.get('[data-test="lastName"]').type('Butt')
    cy.get('[data-test="postalCode"]').type('44000')
    cy.get('[data-test="continue"]').click()
    cy.get('.summary_info').should('be.visible')
  })

})
