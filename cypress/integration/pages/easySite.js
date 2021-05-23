class EasyEvents {
    
    getVisitSite(){
        cy.visit('https://easyevents-v2.herokuapp.com/');
    }
    
    assertHeader(value, value1, value2){
        return cy
                .get('#mainNav')
                .find('.nav-item')
                .eq(0)
                .should('have.text', value)
                .get('#mainNav')
                .find('.nav-item')
                .eq(1)
                .should('have.text', value1)
                .get('#mainNav')
                .find('.nav-item')
                .eq(2)
                .should('have.text', value2);
    }
}
export default new EasyEvents();