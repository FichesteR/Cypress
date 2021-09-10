///<reference types="cypress" />

describe('Login', () => {
    before(() => { //executa uma vez antes dos testes 
        cy.visit('http://plataforma.gamaensino.com/')
    })

    it('Login correto', () => {
        cy.title().should('be.equal', 'Gama Pré Vestibular')
        cy.get('#mat-input-0').type('viplanellis2@gmail.com')
        cy.get('#mat-input-0').should('have.value', 'viplanellis2@gmail.com')
        cy.get('#mat-input-1').type('123456')
        cy.get('span').contains('Entrar').click()
        cy.title().should('be.equal', 'Curso Gama Go')
        cy.get('.mat-icon > .material-icons').click()
        cy.get('.mat-menu-content > :nth-child(3)').click()
    })

    it('Login com e-mail errado', () => {
        cy.title().should('be.equal', 'Gama Pré Vestibular')
        cy.get('#mat-input-0').clear()
        cy.get('#mat-input-0').type('viplanelli212@gmail.com')
        cy.get('#mat-input-0').should('have.value', 'viplanelli212@gmail.com')
        cy.get('#mat-input-1').clear()
        cy.get('#mat-input-1').type('123456')
        cy.get('span').contains('Entrar').click()
    })

    it('Login sem e-mail', () => {
        cy.get('#mat-input-0').clear()
        cy.title().should('be.equal', 'Gama Pré Vestibular')
        cy.get('#mat-input-1').clear()
        cy.get('#mat-input-1').type('123456')
        cy.get('span').contains('Entrar').click()
    })

    it('Login com senha incorreta', () => {
        cy.title().should('be.equal', 'Gama Pré Vestibular')
        cy.get('#mat-input-0').clear()
        cy.get('#mat-input-0').type('viplanellis2@gmail.com')
        cy.get('#mat-input-0').should('have.value', 'viplanellis2@gmail.com')
        cy.get('#mat-input-1').clear()
        cy.get('#mat-input-1').type('41244')
        cy.get('span').contains('Entrar').click()
    })

    it('Login sem senha', () => {
        cy.title().should('be.equal', 'Gama Pré Vestibular')
        cy.get('#mat-input-0').clear()
        cy.get('#mat-input-0').type('viplanellis2@gmail.com')
        cy.get('#mat-input-0').should('have.value', 'viplanellis2@gmail.com')
        cy.get('span').contains('Entrar').click()
    })

    it('Login sem "Manter Logado"', () => {
        cy.title().should('be.equal', 'Gama Pré Vestibular')
        cy.get('#mat-input-0').clear()
        cy.get('#mat-input-0').type('viplanellis2@gmail.com')
        cy.get('#mat-input-0').should('have.value', 'viplanellis2@gmail.com')
        cy.get('#mat-input-1').clear()
        cy.get('#mat-input-1').type('123456')
        cy.get('span').contains('Entrar').click()
        cy.title().should('be.equal', 'Curso Gama Go')
        cy.get('.mat-icon > .material-icons').click()
        cy.get('.mat-menu-content > :nth-child(3)').click()
        cy.get('span').contains('Entrar').click()
        cy.title().should('be.equal', 'Gama Pré Vestibular')
    })

    it('Login com "Manter Logado"', () => {
        cy.title().should('be.equal', 'Gama Pré Vestibular')
        cy.get('#mat-input-0').clear()
        cy.get('#mat-input-0').type('viplanellis2@gmail.com')
        cy.get('#mat-input-0').should('have.value', 'viplanellis2@gmail.com')
        cy.get('#mat-input-1').clear()
        cy.get('#mat-input-1').type('123456')
        cy.get('.checkmark').click()
        cy.get('span').contains('Entrar').click()
        cy.title().should('be.equal', 'Curso Gama Go')
        cy.visit('http://plataforma.gamaensino.com/')
        cy.title().should('be.equal', 'Curso Gama Go')
    })
})