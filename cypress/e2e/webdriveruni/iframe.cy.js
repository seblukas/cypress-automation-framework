/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('iFrame', () => {

    it('open modal in iFrame', () => {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html');
        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body');
            const iFrame = cy.wrap(body).as('iFrame');
            cy.get('@iFrame').find('#button-find-out-more').click();


            cy.get('@iFrame').find('#myModal').as('modal');

            cy.get('@modal').should($modal => {
                const text = $modal.text();
                expect(text).to.contain('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...');
            });


        })
    });
})
