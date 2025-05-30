/// <reference types="cypress"/>
/*
-- fixture
*/
describe('Learn Fixture 005', () => {
    beforeEach(() => {
        cy.fixture('example').then(function (data) {
            this.data = data;
            cy.log('THIS', this.data)
        })
    })
    it('users fixture data in a network request', function () {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept('GET', '**/comments/*', this.data).as('getComment')
        cy.get('.network-btn').click()
        cy.wait('@getComment').then((resp) => {
            cy.log('resp', resp);
        })
    })

    it('pulls data from a fixture', () => {
        cy.fixture('example').then((data) => {
            cy.log('DATA', data);
        })
    })

    it('update fixutre data inline', () => {
        cy.fixture('example').then((data) => {
            data.email = 'rampukar.dev@gmail.com'
            cy.log('DATA', data);
        })
    })
})