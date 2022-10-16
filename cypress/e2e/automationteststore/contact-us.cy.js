/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Test Contact Us on WebdriverUni', () => {

    it('should be able to submit a successful submission via contact us form.', () => {
        cy.visit('https://automationteststore.com/');
        // cy.xpath("//a[contains(@href,'contact')]").click();
        cy
            .get('a[href$=contact]')
            .click()
            .then(contactUsButton => {
                cy.log(`Text on the button is "${contactUsButton.text()}"`)
            })
        cy.get('#ContactUsFrm_first_name').type('Sebastian');
        cy.get('#ContactUsFrm_email').type('sebastian.lukas@coldmail.com');
        cy.get('#ContactUsFrm_email').should('have.attr', 'name');
        cy.get('#ContactUsFrm_enquiry').type('This is a comment');
        cy.get('button[title=\'Submit\']').click();
        cy.get('.mb40 p:nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log('Test has completed!');
    });

    it('Validate properties of the contact us page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');

        cy
            .contains('#ContactUsFrm', 'Contact Us Form')
            .find('#field_11')
            .should('contain', 'First name:')

        cy
            .contains('#ContactUsFrm', 'Contact Us Form')
            .then(text => {
                cy.get('#field_11').then(fnText => {
                    cy.log(fnText.text());
                    expect(fnText.text()).to.contain('First name:')
                });
            })
    });
})
