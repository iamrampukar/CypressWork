/// <reference types="cypress"/>
describe('Cypress Auto Mation', () => {
    it('1st Execute', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('Actions');

    });

    it('2nd Execute', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')
        cy.get('#email1').type('rampukar_mi@gmail.com');
        cy.get('#email1').should('have.value', 'rampukar_mi@gmail.com')
        cy.get('.col-xs-7').find('pre');
        cy.wrap({ width: '50' }).its('width') // Get the 'width' property
    })

    it('3rd Execute', () => {
        const a = cy.get('ul li')

        cy.visit('https://example.cypress.io')
        // nope, fails
        a.first().click()
        // Instead, do this.
        cy.get('a').as('links')
        cy.get('@links').first().click()
    })
})