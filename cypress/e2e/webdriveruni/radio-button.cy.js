/// <reference types="Cypress" />

describe('Validates radiobuttons', () => {

    it('radio 1', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.get("#radio-buttons").find('[type=radio]').as('radioButtons')
        cy.get('@radioButtons').eq(1).check();
    });

    it('radio 2', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');


        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='cabbage']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');
        cy.get("[value='lettuce']").check();
        cy.get("[value='lettuce']").should('be.checked');
        cy.get("[value='pumpkin']").should('not.be.checked');


    });

})
