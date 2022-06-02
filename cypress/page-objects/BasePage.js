import * as data from "../../config";

export default class BasePage {

  static waitForMillimeterSeconds(IIISeconds) {
    cy.wait(data.IIISeconds)
  }

  static logInfo(message) {
    cy.log(message)
  }

  static setMobileViewport() {
    cy.viewport('iphone-x')
  }

  static setTableViewport() {
    cy.viewport('ipad-2')
  }

  static setDesktopViewport() {
    cy.viewport('macbook-13')
  }

  static setLargeDesktopViewport() {
    cy.viewport('macbook-15')
  }

}

