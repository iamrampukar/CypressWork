
# Context Blocks:
-- Context blocks allow you to group tests based on a specific context or scenario. They provide a way to set up a common test environment or share setup steps among related tests

# Describe Blocks:
-- Describe blocks are used to group related tests within a broader context. They provide a higher level of organization, allowing you to categorize tests based on specific functionality or feature

# Main Topic
-- cy.get('h1').should('exist');
-- cy.get('h1').should('contain.text', 'Actions');
-- cy.get('.container').find('p').should('exist');
-- cy.get('.container')
            // .first()
            // .last()
            .eq(1)
            .find('p')
            .should('exist');
-- cy.get('.container')
            .eq(2)
            .within(() => {
                cy.get('h4').should('exist')
                cy.get('p').should('exist')
                cy.get('a').should('exist')
-- it('2000s then', () => {
        cy.get('#email1').type('interfacemiralce@gmail.com')
        cy.wait(2000).then(() => {
            console.log('2000s is finished');
            fetch('https://api.spacexdata.com/v3/missions')
                .then((resp) => resp.json())
                .then((resp_data) => {
                    console.log(resp_data)
                })
        })
    })
-- cy.get('.dropdown-menu').find('li').should('have.class', 'active');
-- cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active');
-- cy.get('.dropdown-menu').find('li').first().should('not.have.class', 'active');
-- cy.get('.dropdown-menu').find('li').first()
        .should('not.have.class', 'active')
        .find('a')
        .should('have.attr', 'href', '/commands/querying');
-- it('Should not have an active class on inactive page', () => {
        cy.visit('https://example.cypress.io');
        cy.findAllByText('Actions').first().click({ force: true })
        cy.url().should('include', 'commands/actions')
    })
-- it('Build Fx', () => {
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

-- cy.get('.....').contains('This username already exist');

# Cypress Hooks
-- before: run one time before all tests start
-- beforeEach: runs before each individual test
-- after: run one time after all tests are finished.
-- afterEach: runs after each individaual test.

# cypress-testing-library
-- https://github.com/testing-library/cypress-testing-library
    Note- Placeholder()
