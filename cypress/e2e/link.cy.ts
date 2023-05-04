describe('link test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('contain link description', () => {
    cy.get('[data-testid="lint-to-docs"]').invoke('attr', 'href').should('eq', 'https://docs.cypress.io')
  })

  it('contain link description', () => {
    cy.get('[data-testid="lint-to-docs"]').contains('Learn Cypress')
  })
})
