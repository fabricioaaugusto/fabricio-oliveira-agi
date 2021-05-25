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
    
    registerNewUser(email, firstName, lastName, dateNasc){
        return cy
                .get('#navbarDropdownMenuLink')
                .click()
                .get('.nav-link')
                .eq(5)
                .click()
                .get('#id_email')
                .type(email)
                .get('#id_first_name')
                .type(firstName)
                .get('#id_last_name')
                .type(lastName)
                .get('#id_born')
                .clear()
                .type(dateNasc)
                .type('{enter}')
                .get('.form-group')
                .eq(5)
                .click({ force: true})
                .wait(150)
                .find('value')

    }
}
export default new EasyEvents();