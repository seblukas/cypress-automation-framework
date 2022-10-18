/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('Mouse actions', () => {

    it('mouse actions 1', () => {
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();
    });

    it('mouse actions 2', () => {
        cy.visit('https://webdriveruniversity.com/Actions/index.html');
        cy.get('#draggable').trigger('mousedown', {which: 1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true});
        cy.get('#droppable').should('contain.text', 'Dropped!');
    });

    it('mouse actions 3', () => {
        cy.visit('https://webdriveruniversity.com/Actions/index.html');
        cy.get('#double-click').dblclick();
        cy.get('#double-click').should('have.class', 'double');
    });

    it('mouse actions 4', () => {
        cy.visit('https://webdriveruniversity.com/Actions/index.html');
        cy.get('#click-box').trigger('mousedown', 'center').then($ele => {
            expect($ele).to.have.css('background-color', 'rgb(0, 255, 0)');
        });
    });

})
