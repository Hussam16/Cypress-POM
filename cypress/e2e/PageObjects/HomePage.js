/// <reference types="cypress"/>
class homePage{

    visitHomePage(){
        cy.visit('https://demo.guru99.com/test/newtours/');
    }

 getUserNameField(){
  return  cy.get('[name=userName]')
}

getPasswordField(){
    return  cy.get('[name=password]')
  }
getLoginButton(){
    return  cy.get('[name=submit]')
}

enterUserName(userName){
    const field= cy.get('[name=userName]');
    field.clear();
    field.type(userName)
    return this;
}
enterPassword(password){
    const field= cy.get('[name=password]');
    field.clear();
    field.type(password)
    return this;
}

}

export default homePage