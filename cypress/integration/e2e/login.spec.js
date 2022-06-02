import Navbar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/LoginPage'
import ForgetPasswordPage from '../../page-objects/pages/ForgetPasswordPage'
import * as data from "../../../config";

const loginPage = new LoginPage()
const navbar = new Navbar()
const forgetPasswordPage = new ForgetPasswordPage()

describe('Login Test', () => {
  beforeEach('open application to Login Page', () => {
   /* cy.fixture('example').then(function(datas) {
      this.datas=datas })
  })*/
    cy.visit(Cypress.env('url'))
    //cy.visit(Cypress.env('url')+"login.html/")
    //cy.visit(data.url)
    cy.url().should("include","webappsecurity.com")
    cy.title().should("include","Zero - Personal Banking")
    navbar.clickOnLogoImageIsVisible()
    navbar.clickOnSignInButtonAndNavigateToLoginPage()
    loginPage.logInToZeroBankHeadingMsg()
        .should("be.visible")
        .and("contain.text", "Log in to ZeroBank")
  })
  it('should be able login into application', () => {
    cy.url().should("eq","http://zero.webappsecurity.com/login.html")
    cy.title().should("eq","Zero - Log in")
    loginPage.UserEntersCredentialInLoginForm('username', 'password')
  })

  it('should not login with invalid credentials', () => {
    cy.url().should("eq","http://zero.webappsecurity.com/login.html")
    cy.title().should("eq","Zero - Log in")
    loginPage.UserEntersCredentialInLoginForm('invalidUsername', 'BadPassword')
    loginPage.clickOnForgotPasswordLink()
    forgetPasswordPage.getForgetPasswordTxt()
  })
})
