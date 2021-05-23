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

    sendEmailViaForm(value, value1, value2, value3){
        return cy
                .get('#id_nome')
                .type(value)
                .get('#id_email')
                .type(value1)
                .get('#id_assunto')
                .type(value2)
                .get('#id_mensagem')
                .type(value3)
                .get('.form-group')
                .find('div')
                .eq(8)
                .find('button')
                .click();
    }   
}
export default new EasyEvents();