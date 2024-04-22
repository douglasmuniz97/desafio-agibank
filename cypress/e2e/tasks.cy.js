/// <reference types="cypress"/>

describe('tarefas', ()=> {

    it('Realizar uma busca', ()=>{
        cy.inicio()
        cy.get('#search-field').type('golpe')
        cy.get('#search-field').type('{enter}')
        cy.get('#post-6094 > .ast-post-format- > .post-content').click()
        cy.get('.entry-title').should('have.text', 'Golpe salário-maternidade: como reconhecer e se prevenir contra fraudes')
    })

    it('Realizar uma busca que não existe', ()=>{
        cy.inicio()
        cy.get('#search-field').type('xícara')
        cy.get('#search-field').type('{enter}')
        cy.get('.page-title > span').should('have.text', 'xícara')
    })

})