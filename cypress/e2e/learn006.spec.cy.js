/// <reference types="cypress"/>
const token = 'abc123';
describe('Learn Fixture 005', () => {
    // beforeEach(() => {
    //     cy.visit('https://example.cypress.io/commands/actions')
    // })

    it('trigger a popover on click', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-btn').click();
        cy.findByText('This popover shows up on click').should('be.visible');
    })

})