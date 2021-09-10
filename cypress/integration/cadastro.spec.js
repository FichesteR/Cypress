///<reference types="cypress" />

describe('Cadastro Básico', () => {
    before(() => { //executa uma vez antes dos testes 
        cy.visit('http://plataforma.gamaensino.com/')
    })

    //cadastro de novo aluno completo 
    it('Cadastro de Novo Aluno', () => {
        cy.get('[type="button"]').click()
        cy.get('.label15').should('have.text', 'Novo Aluno')
        cy.get('#mat-input-2').type('Test Test')
        cy.get('#mat-input-2').should('have.value', 'Test Test')
        cy.get('#mat-input-3').type('test@test.com')
        cy.get('#mat-input-3').should('have.value', 'test@test.com')
        cy.get('#mat-input-4').type('(46) 99877-9988')
        cy.get('#mat-input-4').should('have.value', '(46) 99877-9988')
        cy.get('.btn').click()
    })

    //cadastro de novo aluno sem telefone
    it('Cadastro de Novo Aluno sem telefone', () => {
        cy.get('[type="button"]').click()
        cy.get('.label15').should('have.text', 'Novo Aluno')
        cy.get('#mat-input-2').type('Test1 Test')
        cy.get('#mat-input-2').should('have.value', 'Test Test')
        cy.get('#mat-input-3').type('test1@test.com')
        cy.get('#mat-input-3').should('have.value', 'test@test.com')
        cy.get('.btn').click()
    })

    //cadastro de novo aluno sem e-mail 
    it('Cadastro de Novo Aluno sem e-mail', () => {
        cy.get('[type="button"]').click()
        cy.get('.label15').should('have.text', 'Novo Aluno')
        cy.get('#mat-input-2').type('Test2 Test')
        cy.get('#mat-input-2').should('have.value', 'Test Test')
        cy.get('#mat-input-4').type('(46) 99877-9988')
        cy.get('#mat-input-4').should('have.value', '(46) 99877-9988')
        cy.get('.btn').click()
    })

    //cadastro de novo aluno sem nome 
    it('Cadastro de Novo Aluno sem nome', () => {
        cy.get('[type="button"]').click()
        cy.get('.label15').should('have.text', 'Novo Aluno')
        cy.get('#mat-input-3').type('test3@test.com')
        cy.get('#mat-input-3').should('have.value', 'test@test.com')
        cy.get('#mat-input-4').type('(46) 99877-9988')
        cy.get('#mat-input-4').should('have.value', '(46) 99877-9988')
        cy.get('.btn').click()
    })

    //cadastro de novo aluno completo com opcionais
    it('Testes Opcionais', () => {
        cy.get('[type="button"]').click()
        cy.get('.label15').should('have.text', 'Novo Aluno')
        cy.get('#mat-input-2').type('Testes{backspace}{backspace}4 Teste{backspace}4')
        cy.get('#mat-input-2').should('have.value', 'Test4 Test4')
        cy.get('#mat-input-2').clear()
        cy.get('#mat-input-3').type('test@test.com{selectall}test4@test4.com', {delay:200})
        cy.get('#mat-input-3').should('have.value', 'test4@test4.com')
        cy.get('#mat-input-4').type('(46) 99877-9988')
        cy.get('#mat-input-4').should('have.value', '(46) 99877-9988')
        cy.get('.btn').click()
    })
})