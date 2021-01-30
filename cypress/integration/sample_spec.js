describe('My first test to pino-shop', () => {
  it('search the products correctly', () => {
    cy.visit('localhost:8080')
    cy.get('[id="search-input"]').type('computer')
    cy.get('[id="search-button"]').click()

    cy.get('[id="details-button"]').first().click()

    cy.url().should('include', '/detail')
  })
})
