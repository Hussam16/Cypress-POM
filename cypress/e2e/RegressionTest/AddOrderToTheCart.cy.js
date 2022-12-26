/// <reference types="cypress"/>




describe('NopCommerance Application Regression', () => {
  before(() => {
    cy.visit('https://demo.nopcommerce.com/');
  });
  it('Add Product To The Cart', () => {
     // Search apple macbook pro 13 inch
    cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch");
    cy.get(".search-box-button").click();
    // add procuct to the cart
    cy.get(`[class="button-2 product-box-add-to-cart-button"]`).click()
    // Enter Number of iteams 
    cy.get('#product_enteredQuantity_4').clear().type("2");
    // Click add to cart 
    cy.get('#add-to-cart-button-4').click()
    cy.wait(5000);
    cy.get(`[class="cart-label"]`).click();
    cy.wait(5000);
    //Validate the price of the product 
    cy.get(`[class="product-unit-price"]`).contains('$1,800.00')





   
   
  })



})