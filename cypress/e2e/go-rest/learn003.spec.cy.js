/// <reference types="cypress"/>
const dataJson = require('../../fixtures/create_user');
// import dataJson from '../../fixtures/create_user';

//  Email Address Already inserted.

describe('Go Rest Post Data', () => {
    const token = 'bdc055bf643375eda39a5c52913164a040424c39fc6ee09de8525b9310535dbe';

    const _email = `rampukar${Math.random()}@gmail.com`;

    it('Create User Data', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: {
                "name": dataJson.name,
                "email": _email,
                "gender": dataJson.gender,
                "status": dataJson.status
            }
        }).then((resp) => {
            expect(resp.status).to.eq(201);
            expect(resp.body.data).has.property('email', _email);
            expect(resp.body.data).has.property('name', dataJson.name);
            expect(resp.body.data).has.property('gender', dataJson.gender);
            expect(resp.body.data).has.property('status', dataJson.status);
        }).then((respX) => {
            const userId = respX.body.data.id;
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v1/users/' + userId,
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).then((respX2) => {
                expect(respX2.status).to.eq(200);
            })
        });
    });
});