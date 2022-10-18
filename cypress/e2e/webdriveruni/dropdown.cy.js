/// <reference types="Cypress" />

describe('Validates dropdowns', () => {

    it('dropdown 1', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');

        cy.get('#dropdowm-menu-1').select('c#');
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng');
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery');
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven');
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG');
    });

})
