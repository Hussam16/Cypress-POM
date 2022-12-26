/// <reference types="cypress"/>
import HomePage from '../PageObjects/HomePage'

describe('Page Object Model Suite', () => {


    it('Login to New Tours Application', () => {
        const homePage=new HomePage();

        homePage.visitHomePage();
        homePage.getPasswordField().should('be.visible');
        homePage.getUserNameField().should('be.visible');
        homePage.enterUserName('admin');
        homePage.enterPassword('admin');
        homePage.getLoginButton().should('be.enabled').click();

    });
});

