export default class POHomepage {

    visit() {
        cy.visit(Cypress.env('webdriveruniBaseURL'));
    }

    clickOnContactUs() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
    }

}
