describe('Navigation Tests - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  // Navigation Test 1
  it('Navigation Test 1: Click menu link and correct page opens', () => {
    cy.get('.title').should('have.text', 'Products')
    cy.url().should('include', '/inventory')
  })

  // Navigation Test 2
  it('Navigation Test 2: Visit 2 pages in sequence', () => {
    cy.url().should('include', '/inventory')
    cy.get('.title').should('have.text', 'Products')
    cy.get('[data-test="item-4-title-link"]').click()
    cy.url().should('include', '/inventory-item')
    cy.get('.inventory_details_name').should('be.visible')
  })

})
