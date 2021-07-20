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
    
    getAssertHeader(value0, value1, value2, value3, value4, value5){
        return cy
            .get('.nav-item')
            // .find('div')
            .eq(0)
            .should('have.text', value0)
            .get('.nav-item')
            .find('div')
            .eq(1)
            .should('have.text', value1)
            .get('.nav-item')
            .find('div')
            .eq(2)
            .should('have.text', value2)
            .get('.nav-item')
            .find('div')
            .eq(3)
            .should('have.text', value3)
            .get('.nav-item')
            .find('div')
            .eq(4)
            .should('have.text', value4)
            .get('.nav-item')
            .find('div')
            .eq(5)
            .should('have.text', value5);
    }
}
export default new StatusInvest();