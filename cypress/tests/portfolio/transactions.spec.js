import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage.js'
import TransactionsPage from '../../pages/transactionsPages.js'

const loginPage = new LoginPage()
const transactionsPages = new TransactionsPage()

describe('Transactions - Real World App', ()=> {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        cy.visit('/signin')
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        cy.get('[data-test="sidenav-username"]').should('have.text', '@Heath93')
        transactionsPages.getTransaction('8')
    });

    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        cy.visit('/signin')
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        cy.get('[data-test="sidenav-username"]').should('have.text', '@Heath93')
        transactionsPages.getFriendTransaction('7')
        cy.get('.MuiListSubheader-root').should('have.text', 'Contacts')
        cy.get('[data-test="empty-list-header"] > .MuiTypography-root').should('have.text', 'No Transactions')
    });
})