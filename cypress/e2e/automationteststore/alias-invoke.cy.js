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

    it('should get all the thumbnails and validate the cart text', () => {
        cy.visit('https://automationteststore.com');
        cy.get('a[href*=\'product/category&path=\']')
            .contains('Hair Care')
            .click();

        cy.get('.thumbnail').as('thumbnails');
        cy.get('@thumbnails').should('have.length', 8);
        cy.get('@thumbnails').find('.productcart')
            .should('have.attr', 'title', 'Add to Cart');
    });

    it.only('calculate total of normal and sale products', () => {
        cy.visit('https://automationteststore.com');

        cy.get('.thumbnail').as('thumbnails');
        // cy.get('@thumbnails').find('.oneprice').each($ele => {
        //     cy.log(Number($ele.text().replace('$', '')));
        // });
        let itemPricesTotal = 0;
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('@itemPrice').then($linkText => {
           let itemPrice = $linkText.split('$') ;
           let total = 0;
           for(let i = 0; i < itemPrice.length; i++) {
               cy.log(itemPrice[i])
               total += ++itemPrice[i];
           }
           cy.log(total.toString());
           itemPricesTotal += total;
        });

        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');
        cy.get('@saleItemPrice').then($linkText => {
            let itemPrice = $linkText.split('$') ;
            let total = 0;
            for(let i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                total += ++itemPrice[i];
            }
            cy.log(total.toString());

            itemPricesTotal += total;
        }).then(() => {
            cy.log(itemPricesTotal);
        });
    });
})
