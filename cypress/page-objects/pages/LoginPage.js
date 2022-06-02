import BasePage from '../BasePage'

export default class LoginPage extends BasePage {

  logInToZeroBankHeadingMsg() {
    return cy.get('.page-header')
  }

    enterUsernameBox(username) {
    cy.get('#user_login')
      .should('be.visible')
      .should('be.enabled')
      .type(username)
  }
  enterPasswordBox(password) {
    cy.get('#user_password')
      .should('be.visible')
      .should('be.enabled')
      .type(password)
  }
  rememberMeLoginDetailsRadioButton() {
    cy.get('#user_remember_me')
      .should('be.visible')
      .should('be.enabled')
      .click()
  }
  clickOnSubmitButton() {
    cy.contains('Sign in')
        .should('be.visible')
        .should('be.enabled')
        .click()
  }
  clickOnForgotPasswordLink() {
    cy.contains('Forgot your password ?')
      .should('be.visible')
      .click().then(($forgetPass) =>{
        cy.log("Displaying Text: " +$forgetPass.text())
    })
  }
  UserEntersCredentialInLoginForm(username, password) {
    this.enterUsernameBox(username)
    this.enterPasswordBox(password)
    this.rememberMeLoginDetailsRadioButton()
    this.clickOnSubmitButton()
  }
}
