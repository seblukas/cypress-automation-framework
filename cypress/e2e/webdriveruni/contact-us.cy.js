/// <reference types="Cypress" />

describe('Test Contact Us on WebdriverUni', () => {

    it('should be able to submit a successful submission via contact us form.', () => {
        // cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.visit('https://webdriveruniversity.com');

        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'Contact Us');
        cy.url().should('include', '/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('Sebastian');
        cy.get('[name="last_name"]').type('Lukas');
        cy.get('[name="email"]').type('sebastian.lukas@coldmail.com');
        cy.get('textarea.feedback-input').type('This is a comment.', {force: true});
        cy.get('[type="submit"]').click();
        cy.get('#contact_reply h1').should('have.text', 'Thank You for your Message!');
    });
    it('should not be able to submit contact us form without email.', () => {
        // cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        cy.visit('https://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});

        cy.get('[name="first_name"]').type('Sebastian');
        cy.get('[name="last_name"]').type('Lukas');
        cy.get('textarea.feedback-input').type('This is a comment.', {force: true});
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required')
    });

})
