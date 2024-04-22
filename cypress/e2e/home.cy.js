/// <reference types="cypress"/>

describe('home', () => {
  it('webapp deve estar online', () => {
    cy.visit('/')

    cy.title().should('eq', 'Blog do Agi | Tudo sobre empréstimo e educação financeira')
  })
})
