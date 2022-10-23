/// <reference types="Cypress" />
import POHomepage from "../../support/pageObjects/webdriveruni/POHomepage";

describe('Test Contact Us on WebdriverUni', () => {

    beforeEach(() => {
        const homepage = new POHomepage();
        homepage.visit();
        homepage.clickOnContactUs();
    });

    it('should be able to submit a successful submission via contact us form.', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'Contact Us');
        cy.url().should('include', '/Contact-Us/contactus.html')

        cy.pause();
        cy.get('[name="first_name"]').type('Sebastian');
        cy.get('[name="last_name"]').type('Lukas');
        cy.get('[name="email"]').type('sebastian.lukas@coldmail.com');
        cy.get('textarea.feedback-input').type('This is a comment.', {force: true});
        cy.get('[type="submit"]').click();
        cy.get('#contact_reply h1').should('have.text', 'Thank You for your Message!');
    });
    it('should not be able to submit contact us form without email.', () => {
        cy.get('[name="first_name"]').type('Sebastian');
        cy.get('[name="last_name"]').type('Lukas');
        cy.get('textarea.feedback-input').type('This is a comment.', {force: true});
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required')
    });

})
