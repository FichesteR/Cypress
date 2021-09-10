///<reference types="cypress" />

describe('Login', () => {
    beforeEach(() => { //executa uma vez antes dos testes 
        cy.visit('http://plataforma.gamaensino.com/')
    })

    it('Recuperacao correta', () => {
        cy.title().should('be.equal', 'Gama Pré Vestibular')
        cy.get('.alert-link').click()
        cy.title().should('be.equal', 'Senha')
        cy.get('#mat-input-2').type('test@test.com')
        cy.get('.mat-button-wrapper > :nth-child(2)').click()
        cy.get('#swal2-title').should('have.text', 'Solicitação Enviada')
    })

    it('Recuperacao incorreta', () => {
        cy.title().should('be.equal', 'Gama Pré Vestibular')
        cy.get('.alert-link').click()
        cy.title().should('be.equal', 'Senha')
        cy.get('#mat-input-2').type('test@test.con')
        cy.get('.mat-button-wrapper > :nth-child(2)').click()
        cy.get('#swal2-title').should('have.text', 'Ops')
    })
})