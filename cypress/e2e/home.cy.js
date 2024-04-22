describe('home', () => {
  it('webapp deve estar online', () => {
    cy.visit('https://blogdoagi.com.br/')

    cy.title().should('eq', 'Blog do Agi | Tudo sobre empréstimo e educação financeira')
  })
})