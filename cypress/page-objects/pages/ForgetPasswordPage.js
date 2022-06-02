export default class ForgetPasswordPage{

getForgetPasswordTxt(){
    const text = cy.get('h3')
        .contains("Forgotten Password")
        .should('be.visible')
        .then(($fPass) => {
        cy.log("Displaying Text: " +$fPass.text())
    })

    }

}

