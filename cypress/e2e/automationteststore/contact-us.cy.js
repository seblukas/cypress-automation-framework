/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Test Contact Us on WebdriverUni', () => {

    it('should be able to submit a successful submission via contact us form.', () => {
        cy.visit('https://automationteststore.com/');
        // cy.xpath("//a[contains(@href,'contact')]").click();
        cy.get('a[href$=contact]').click();
        cy.get('#ContactUsFrm_first_name').type('Sebastian');
        cy.get('#ContactUsFrm_email').type('sebastian.lukas@coldmail.com');
        cy.get('#ContactUsFrm_email').should('have.attr', 'name');
        cy.get('#ContactUsFrm_enquiry').type('This is a comment');
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 p:nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    });
})
