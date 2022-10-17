/// <reference types="Cypress" />

describe('Cypress with web security', () => {


    it.skip('should navigate to two different domains', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.visit('https://automationteststore.com');
    });

    it('should navigate to automation test store via link', () => {
        cy.visit('https://webdriveruniversity.com');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
    });
})
