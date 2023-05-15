describe('link test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('contain link description', () => {
    cy.get('[data-testid="lint-to-docs"]').invoke('attr', 'href').should('eq', 'https://docs.cypress.io')
  })

  it('contain link description', () => {
    cy.get('[data-testid="lint-to-docs"]').contains('Learn Cypress')
  })
})
