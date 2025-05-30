/// <reference types="cypress"/>
describe('Describe Learn 002', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions');
    });

    it('Dropdown Menu', () => {
        // cy.get('.dropdown-menu').find('li').should('have.class', 'active');
        cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active');
    })

    it('Should not have an active class on inactive page', () => {
        // cy.get('.dropdown-menu').find('li').first().should('not.have.class', 'active');
        cy.get('.dropdown-menu').find('li').first()
            .should('not.have.class', 'active')
            .find('a')
            .should('have.attr', 'href', '/commands/querying');


    })
});