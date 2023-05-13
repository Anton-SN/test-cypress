describe('device tests', () => {
  afterEach(() => {
    cy.wait(2000)
  })

  it('iphone 3', () => {
    cy.viewport('iphone-3')
    cy.visit('/')
  })

  it('ipad 2', () => {
    cy.viewport('ipad-2')
    cy.visit('/')
  })

  it('720p', () => {
    cy.viewport(1280, 720)
    cy.visit('/')
  })

  it('1080p', () => {
    cy.viewport(1280, 720)
    cy.visit('/')
  })

  it('macbook 16', () => {
    cy.viewport('macbook-16')
    cy.visit('/')
  })
})
