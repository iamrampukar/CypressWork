/// <reference types="cypress"/>

describe('Table Cypress Testing', () => {
    it('1st Table', () => {
        cy.visit('http://laravel12.io/cypress-list');
        // cy.get('tr').eq(2).should('contain', 'Canada') //true
        // cy.get('table').each(($el, index, $list) => {
        //     const tr = `tbody > :nth-child(${index}) > :nth-child(1)`;
        //     cy.get(tr).eq(index).should(true);

        // })

        cy.get("table").find("tr").then((row) => {
            const len = row.length;
            for (let index = 0; index < len; index++) {
                const result = cy.get('tr').eq(index).should('contain', 'Canada')
                if (result) {
                    break;
                }
            }
        });
    })
})