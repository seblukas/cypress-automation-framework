/// <reference types="Cypress" />

describe('Test Contact Us on WebdriverUni', () => {

  it('should be able to submit a successful submission via contact us form.', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get('[name="first_name"]').type('Sebastian');
    cy.get('[name="last_name"]').type('Lukas');
    cy.get('[name="email"]').type('sebastian.lukas@coldmail.com');
    cy.get('textarea.feedback-input').type('This is a comment.', {force: true});
    cy.get('[type="submit"]').click();
  });
  it('should not be able to submit contact us form without email.', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
    cy.get('[name="first_name"]').type('Sebastian');
    cy.get('[name="last_name"]').type('Lukas');
    cy.get('textarea.feedback-input').type('This is a comment.', {force: true});
    cy.get('[type="submit"]').click();
  });

})
