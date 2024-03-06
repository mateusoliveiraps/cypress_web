/// <reference types="cypress" />

describe('Login', () => {
    beforeEach('Acesso a aplicação', () => {
        cy.visit('/login')
    })

    it('Login com Sucesso', () => {
        cy.get('#user').type('mateus.oliveira@qazando.com.br')
        cy.get('#password').type('123456')

        cy.get('#btnLogin').click()

        cy.get('#swal2-title').should('have.text', 'Login realizado')
    })

    it('Senha inválida', () => {
        cy.get('#user').type('mateus.oliveira@qazando.com.br')
        cy.get('#password').type('123')

        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('have.text', 'Senha inválida.')

    })

    it('E-mail inválido', () => {

        cy.get('#user').type('mateus')
        cy.get('#password').type('123456')

        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })

    it('Senha não informada', () => {

        cy.get('#user').type('mateus.oliveira@qazando.com.br')
        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })

    it('E-mail não informado', () => {

        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })

    it('Campos não informado', () => {
    
        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })
})