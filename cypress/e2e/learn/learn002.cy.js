/// <reference types="cypress"/>
describe('Lear002', () => {
    it('Site visit', () => {
        cy.visit('https://www.google.com/');
        cy.get('#APjFqb').type('Himalaya');
        cy.get('.FPdoLc > center > .gNO89b').click({ force: true });
    });
});