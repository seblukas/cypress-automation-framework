/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Apis', () => {

    let result;
    it('api.', () => {
        result = cy.request('localhost:3000/posts');
        result.its('status').should('eq', 200);
    });

    it('body.', () => {
        result = cy.request({
            url: 'localhost:3000/comments',
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        }).then(response => {
            let body = response.body;
            expect(body).to.have.length(3);
            expect(body[0]).to.deep.eq({
                "id": 1,
                "body": "Hello world!",
                "postId": 1
            });
        })
        result.its('status').should('eq', 200);
    });
})
