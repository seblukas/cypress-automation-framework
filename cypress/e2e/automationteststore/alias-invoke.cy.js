/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Alias and Invoke', () => {
    it('Validate a specific hair care product', () => {
        cy.visit('https://automationteststore.com');
        cy.get('a[href*=\'product/category&path=\']')
            .contains('Hair Care')
            .click();

        cy.get('.fixed_wrapper .prdocutname')
            .eq(0)
            .invoke('text')
            .as('productThumbnail');

        cy.get('@productThumbnail').its('length').should('be.gt', 5);
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');
    });

    it.only('should get all the thumbnails and validate the cart text', () => {
        cy.visit('https://automationteststore.com');
        cy.get('a[href*=\'product/category&path=\']')
            .contains('Hair Care')
            .click();

        cy.get('.thumbnail').as('thumbnails');
        cy.get('@thumbnails').should('have.length', 8);
        cy.get('@thumbnails').find('.productcart')
                .should('have.attr', 'title', 'Add to Cart');
    });
})
