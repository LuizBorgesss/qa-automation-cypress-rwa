class LoginPage {
    selectorsList(){
        const selectors = {
            usernameField: "[name='username']",
            usernamePassword: "[name='password']",
            sigInButton: "[data-test='signin-submit']"
        }
        return selectors
    }

    loginWithUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)

        cy.get(this.selectorsList().usernamePassword).type(password)

        cy.get(this.selectorsList().sigInButton).click()
    }
}

export default LoginPage