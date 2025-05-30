
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
--  cy.get('.container')
            .eq(2)
            .within(() => {
                cy.get('h4').should('exist')
                cy.get('p').should('exist')
                cy.get('a').should('exist')
            })
# cypress-testing-library
-- https://github.com/testing-library/cypress-testing-library