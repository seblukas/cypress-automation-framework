/// <reference types="Cypress" />

describe('Validates Webdriveruni homepage links', () => {

    it('Confirm links redirect to correct pages', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('contain', 'contactus');
        cy.go('back');
        cy.url().should('eq', 'https://webdriveruniversity.com/');
        cy.reload();
        // cy.reload(true); // reload without using cache
        cy.go('forward');
        cy.url().should('contain', 'contactus');

        cy.go('back');

        cy.get('#login-portal').invoke('removeAttr', 'target').click({force: true});

        cy.url().should('contain', 'Login-Portal');

    });
})
