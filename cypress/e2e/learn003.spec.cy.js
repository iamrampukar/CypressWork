/// <reference types="cypress"/>
describe('Describe Learn 001', () => {
    it('Build Fx', () => {
        cy.visit('https://example.cypress.io');
        cy.findAllByText('Actions').first().click({ force: true })
        cy.url().should('include', 'commands/actions')
        cy.findByPlaceholderText('Email').type('Test').should('have.value', 'Test')
        cy.findByLabelText('Describe:').type('Your Description')
            .should('have.value', 'Your Description')
            .clear().should('have.value', '')
        // cy.get('.action-checkboxes [type="checkbox"]').first().check().should('be.checked')
        cy.get('.action-checkboxes [type="checkbox"]').eq(1).check({ force: true }).should('be.checked')
    })
});