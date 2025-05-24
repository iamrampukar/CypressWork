/// <reference types="cypress"/>
describe('GoRest Api Group', () => {
    const token = 'bdc055bf643375eda39a5c52913164a040424c39fc6ee09de8525b9310535dbe';
    // it('Fetch user', () => {
    it.only('Fetch all user', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200);
            expect(resp.body.meta.pagination.limit).to.eq(10);
        })
    });

    it('Fetch user By Id', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v1/users/7908861',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200);
            expect(resp.body.data.name).to.equal('Akshayakeerti Shah');
        })
    });
});