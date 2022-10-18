/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('Autocomplete', () => {

    it('autocomplete 1', () => {
       cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html');

       cy.get('#myInput').type('A');
       cy.get('#myInputautocomplete-list > *').each($item => {
           const product = $item.text();
           if (product === 'Apple') {
               cy.wrap($item).click();
           }
       });

        cy.get('#myInput').should('have.value', 'Apple');
        cy.get('#submit-button').click();
        cy.url().should('contain','food-item=Apple');

    });

    it('autocomplete 2', () => {
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html');

        cy.get('#myInput').type('G');
        cy.xpath("//*[contains(text(), 'rapes')]").first().click({force: true});
        cy.get('#submit-button').click();
        cy.url().should('contain','food-item=Grapes');

    });
})
