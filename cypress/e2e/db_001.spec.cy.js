/// <reference types="cypress"/>
describe("Data from Database", () => {
    it("reads data from the database", () => {
        cy.task("connectDB", "select * from actor").then((resp) => {
            cy.log(resp)
            console.log(resp) // Log the response to the console
        });
    });
});