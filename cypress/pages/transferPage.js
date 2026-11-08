class TransferPage{
    selectorList(){
        const selectors = {
            newTransferButton: '[data-test="nav-top-new-transaction"]',
            userContact: '[data-test^="user-list-item"]',
            transferAmount: '[name="amount"]',
            transferNote: '.MuiInputBase-root > [name="description"]',
            paymentButton: '[data-test="transaction-create-submit-payment"]'
        }
        return selectors
    }

    getTransfer(user, amount, note){
        cy.get(this.selectorList().newTransferButton).click()
        cy.get(this.selectorList().userContact).contains(user).click()
        cy.get(this.selectorList().transferAmount).type(amount)
        cy.get(this.selectorList().transferNote).type(note)
        cy.get(this.selectorList().paymentButton).click()
    }

}

export default TransferPage