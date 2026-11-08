class TransactionsPage{
    selectorsList(){
        const selectors = {
            minePageButton: '[data-test="nav-personal-tab"]',
            friendsPageButton: '[data-test="nav-contacts-tab"]',
            selectDate: '[data-test="transaction-list-filter-date-range-button"] > .MuiChip-label',
            calendarDay: '.react-calendar__tile'
        }
        return selectors
    }

    getTransaction(day){
        cy.get(this.selectorsList().minePageButton).click()
        cy.get(this.selectorsList().selectDate).click()
        cy.get(this.selectorsList().calendarDay).contains(day).click().click()
    }

    getFriendTransaction(day){
        cy.get(this.selectorsList().friendsPageButton).click()
        cy.get(this.selectorsList().selectDate).click()
        cy.get(this.selectorsList().calendarDay).contains(day).click().click()
    }
}

export default TransactionsPage