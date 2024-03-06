/// <reference types="cypress" />

describe('Login', () => {
    // beforeEach(() => {
    //     cy.visit('/login')
    // })

    it('Login com Sucesso', () => {
        cy.visit('https://automationpratice.com.br/login')

        cy.get('#user').type('eduardo.finotti@qazando.com.br')
        cy.get('#password').type('123456')

        cy.get('#btnLogin').click()

        cy.get('#swal2-title').should('have.text', 'Login realizado')

    })

    it('Senha inválida', () => {
        cy.visit('https://automationpratice.com.br/login')

        cy.get('#user').type('eduardo.finotti@qazando.com.br')
        cy.get('#password').type('123')

        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('have.text', 'Senha inválida.')

    })

    it('E-mail inválido', () => {
        cy.visit('https://automationpratice.com.br/login')

        cy.get('#password').type('123456')

        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })

    it('Senha não informada', () => {
        cy.visit('https://automationpratice.com.br/login')

        cy.get('#user').type('eduardo.finotti@qazando.com.br')
        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })

    it('E-mail não informado', () => {
        cy.visit('https://automationpratice.com.br/login')

        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })

    it('Campos não informado', () => {
        cy.visit('https://automationpratice.com.br/login')

        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })
})