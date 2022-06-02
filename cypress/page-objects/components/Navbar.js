import BasePage from '../BasePage'

export default class Navbar extends BasePage {

  clickOnLogoImageIsVisible() {
    cy.get('.brand').should('be.visible').click()
  }

/*  enterSearchBoxWithKeyword(keyword) {
    cy.get('#searchTerm').type(`${keyword} {enter}`)
  }*/

  clickOnSignInButtonAndNavigateToLoginPage() {
    cy.get('#signin_button').should('be.visible').should('be.enabled').click()
    //loginPage.waitForMillimeterSeconds(data.IIISeconds)
  }
}
