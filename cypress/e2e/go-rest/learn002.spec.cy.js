/// <reference types="cypress"/>
const dataJson = require('../../fixtures/create_user');
// import dataJson from '../../fixtures/create_user';

//  Email Address Already inserted.

describe('Go Rest Post Data', () => {
    const token = 'bdc055bf643375eda39a5c52913164a040424c39fc6ee09de8525b9310535dbe';
    const _email = 'rampukar102@gmail.com';
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
            cy.log(JSON.stringify(resp));
            expect(resp.status).to.eq(201);
            expect(resp.body.data).has.property('email', _email);
            expect(resp.body.data).has.property('name', dataJson.name);
            expect(resp.body.data).has.property('gender', dataJson.gender);
            expect(resp.body.data).has.property('status', dataJson.status);
        });
    });
});