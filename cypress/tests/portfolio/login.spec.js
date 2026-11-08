import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage.js'
import RegisterPage from '../../pages/registerPage.js'

const loginPage = new LoginPage()
const registerPage = new RegisterPage()

describe('Login - Real World APP', ()=> {

    it('Deve realizar login com credenciais válidas', () => {
        cy.visit('/signin')
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        cy.get('[data-test="sidenav-username"]').should('have.text', '@Heath93')
    })    

    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
        cy.visit('/signin')
        loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
        cy.get('.MuiAlert-message').should('have.text', 'Username or password is invalid')
        // cy.location('pathname').should('eq', '/signin')
    })

    it('Deve registrar um novo usuário com informações válidas', () => {
        cy.visit('/signin')
        cy.get('[data-test="signup"]').click()  
        registerPage.getRegisterFields({
            firstName: 'Luiz',
            lastName: 'Borges',
            userName: 'luiz123',
            password: 'Teste123',
            confirmPassword: 'Teste123'
        })
    });

    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
        cy.visit('/signin')
        cy.get('[data-test="signup"]').click()  
        registerPage.fillRegisterFields({
            firstName: 'Luiz',
            userName: 'luiz123',
            password: 'Teste123',
            confirmPassword: 'Teste123'
        })
        cy.get("[data-test='signup-submit']").should('be.disabled')
    });
})