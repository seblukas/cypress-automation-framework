/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Verifying variables, cypress commands and jquery commands', () => {

    it('Navigating to specific product pages', () => {
        cy.visit('https://automationteststore.com');
        cy.get('a[href*=\'product/category&path=\']')
            .contains('Makeup')
            .click();
        cy.get('a[href*=\'product/category&path=\']')
            .contains('Skincare')
            .click();
    });

    it('Navigating to specific product pages with header', () => {
        cy.visit('https://automationteststore.com');
        cy.get('a[href*=\'product/category&path=\']')
            .contains('Makeup')
            .click();

        cy.get('h1 .maintext')
            .then(header => {
                const headerText = header.text();
                cy.log(`Found headerText ${headerText}`)
                    .then(() => {
                        expect(header.text()).is.eq('Makeup');
                    })
            });
    });
})
