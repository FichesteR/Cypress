///<reference types="cypress" />

describe('Cadastro Básico', () => {
    beforeEach(() => { //executa uma vez antes dos testes 
        cy.visit('http://plataforma.gamaensino.com/')
    })

    it('Validação Inicio Gama Go',() =>{
        cy.title().should('be.equal', 'Gama Pré Vestibular')
        cy.get('#mat-input-0').type('viplanellis2@gmail.com')
        cy.get('#mat-input-0').should('have.value', 'viplanellis2@gmail.com')
        cy.get('#mat-input-1').type('123456')
        cy.get('span').contains('Entrar').click()
        cy.title().should('be.equal', 'Curso Gama Go')
        cy.get(':nth-child(1) > .card-footer > .call-to-action > .button-curso').click()
        cy.get('.mb-0').contains('Onboarding').should('have.text','Onboarding')
    })
})