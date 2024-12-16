describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4321')
  })

  it('loads the homepage successfully', () => {
    cy.get('body').should('be.visible')
  })

  it('contains the welcome text', () => {
    cy.get('h1').contains('To get started, open the src/pages directory in your project')
  })

  it('has the Astro logo', () => {
    cy.get('img[alt="Astro Homepage"]').should('be.visible')
  })

  it('has navigation links', () => {
    cy.get('#links')
      .find('a.button').should('have.text', 'Read our docs')
      .parent()
      .find('a').last().should('contain.text', 'Join our Discord')
  })

  it('has the "What\'s New" section', () => {
    cy.get('#news')
      .should('have.attr', 'href', 'https://astro.build/blog/astro-5/')
      .find('h2').should('have.text', "What's New in Astro 5.0?")
  })
})
