/// <reference types="cypress"/>
describe('Login Page TestCases ', () => {
    let data;

    before(() => {
        cy.fixture('credentials').then((fData) => {
            data = fData;
        });
      });


    it('Verify Radio buttons & CheckBoxes', () => {
        
       // cy.visit('https://demo.guru99.com/test/newtours/');
        //cy.get('[name=userName]').should('be.visible').should('be.enabled').type(data.admin.username);
        //cy.get('[name=password]').should('be.visible').should('be.enabled').type(data.admin.password);
        //cy.get('[name=submit]').should('be.visible').should('be.enabled').click();
        cy.loginNewTours(data.admin.username,data.admin.password);
        cy.get(':nth-child(2) > [width="80"] > a').should('be.visible').click();
        cy.title().should('eql','Find a Flight: Mercury Tours:');
        cy.get('[value=roundtrip]').should('be.visible').should('be.checked');
        cy.get('[value=oneway]').should('be.visible').should('not.be.checked').click();
        //cy.get('td > input').click();
        //cy.title().should('eql','Find a Flight: Mercury Tours:');
        cy.get('[type=radio]').check('Business');
        cy.get('[name=airline]').select('Blue Skies Airlines');

    });
});