/// <reference types="cypress"/>
/*
-- before
-- beforeach
-- after
-- afterEach
*/
describe('Describe Learn 004', () => {
    before(() => {
        cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10);
    })
    // Before eg-01: Start
    /*
    it('before visit the home page', () => {
        cy.visit('https://example.cypress.io');
        cy.get('h1').should('exist');
    })
    it('before has an h1 on the page', () => {
        cy.visit('https://example.cypress.io');
        cy.get('h1').should('contain.text', 'Kitchen Sink');
    })
    */
    // Before Eg-01: End


    // BefoeEach eg-02: Start
    beforeEach(() => {
        cy.visit('https://example.cypress.io');
    })

    afterEach(() => {
        cy.log('After each hook is here');
    })

    after(() => {
        cy.log('the final after hook runs once');
    })

    it('beforeEach visit the home page', () => {
        // cy.visit('https://example.cypress.io');
        cy.get('h1').should('exist');
        cy.visit('https://example.cypress.io');
    })
    it('beforeEach has an h1 on the page', () => {
        // cy.visit('https://example.cypress.io');
        cy.get('h1').should('contain.text', 'Kitchen Sink');
    })
    // BefoeEach eg-02: End
})