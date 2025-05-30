/// <reference types="cypress"/>

// context('Context Learn 001', () => {
//     it('Cypress IO', () => {
//         cy.visit('https://example.cypress.io/commands/actions');
//     })
// });

describe('Describe Learn 001', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions');
    });

    it('Has an h1 the page', () => {
        cy.get('h1').should('exist');
    })

    it('Correct text', () => {
        cy.get('h1').should('contain.text', 'Actions');
    })

    it('Find block of container', () => {
        cy.get('.container').find('p').should('exist');
    })

    it('Find', () => {
        cy.get('.container')
            // .first()
            // .last()
            .eq(1)
            .find('p')
            .should('exist');
    })

    it('Find within()', () => {
        cy.get('.container')
            // .first()
            // .last()
            .eq(2)
            .within(() => {
                cy.get('h4').should('exist')
                cy.get('p').should('exist')
                cy.get('a').should('exist')
            })
    })

});
