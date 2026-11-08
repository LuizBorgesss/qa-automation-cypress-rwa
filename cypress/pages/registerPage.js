class RegisterPage{
    selectorsList(){
        const selectors = {
            firstName: "[name='firstName']",
            lastName: "[name='lastName']",
            userName: "[name= 'username']",
            password: "[name='password']",
            confirmPassword: "[name='confirmPassword']",
            signUpButton: "[data-test='signup-submit']"
        }
        return selectors
    }

    getRegisterFields(user){
        cy.get("[name='firstName']").type(user.firstName)
        cy.get("[name='lastName']").type(user.lastName)
        cy.get("[name='username']").type(user.userName)
        cy.get("[name='password']").type(user.password)
        cy.get("[name='confirmPassword']").type(user.confirmPassword)
        cy.get(this.selectorsList().signUpButton).click()
    }

    fillRegisterFields(user){
        if(user.firstName) cy.get("[name='firstName']").type(user.firstName)
        if(user.lastName) cy.get("[name='lastName']").type(user.lastName)
        if(user.userName) cy.get("[name='username']").type(user.userName)
        if(user.password) cy.get("[name='password']").type(user.password)
        if(user.confirmPassword) cy.get("[name='confirmPassword']").type(user.confirmPassword)
    }

}

export default RegisterPage