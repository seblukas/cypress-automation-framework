/// <reference types="Cypress" />

describe('Handle JS alerts', () => {

    it('Confirm js alerts contains the correct text.', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html');
        cy.get('#button1').click();
        cy.on('window:alert', ($event) => {
            expect($event).to.eq('I am an alert box!');
        });
    });

    it('Validate js confirm alert box works when clicking okay', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html');
        cy.get('#button4').click();
        cy.on('window:confirm', ($event) => {
            return true;
        });

        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!');
    });

    it('Validate js confirm alert box works when clicking cancel', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html');
        cy.get('#button4').click();
        cy.on('window:confirm', ($event) => {
            return false;
        });

        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!');
    });

    it('Validate js confirm alert box works with stubs', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html');
        const stub = cy.stub();
        cy.on('window:confirm', stub);
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!');
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!');
        });
    });
})
