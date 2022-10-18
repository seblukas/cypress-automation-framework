/// <reference types="Cypress" />

describe('Validates checkboxes', () => {

    it('checkbox 1', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.get("input[value='option-1']").as('option1')
        cy.get("@option1").check();
        cy.get("@option1").should('be.checked');
        cy.get("input[value='option-3']").as('option3')
        cy.get("@option3").uncheck();
        cy.get("@option3").should('not.be.checked');
    });

    it('checkbox 2 - multiple checkboxes', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.get("input[type='checkbox']").as('allOptions')
        cy.get("@allOptions").check('option-1', 'option-2', 'option-3');
        cy.get("@allOptions").should('be.checked');
        cy.get("input[value='option-4']").as('option4')
        cy.get("@option4").should('not.be.checked');
    });
})
