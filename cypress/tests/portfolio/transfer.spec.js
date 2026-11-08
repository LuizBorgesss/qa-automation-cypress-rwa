import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage.js'
import TransferPage from '../../pages/transferPage.js'

const loginPage = new LoginPage()
const transferPage = new TransferPage()

describe('Transfer - Real World App', ()=> { 

    it('Deve enviar dinheiro com sucesso', () => {
        cy.visit('/signin')
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        cy.get('[data-test="sidenav-username"]').should('have.text', '@Heath93')
        transferPage.getTransfer('Darrel Ortiz','20','Pix')
        cy.get('.MuiAlert-message').should('have.text', 'Transaction Submitted!')
  });
})