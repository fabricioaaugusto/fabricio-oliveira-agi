class StatusInvest {
    
    getVisitSite(){
        cy.visit('https://statusinvest.com.br/');
    }
    
    getForCloseModalIfVisible(){
        return cy
            .get('.text-right')
            .find('button')
            .get('.btn-close')
            .should('be.visible')
            .click();
    }
    
    getAssertHeader(){
        return cy
            .get('.links d-flex');
    }
}
export default new StatusInvest();