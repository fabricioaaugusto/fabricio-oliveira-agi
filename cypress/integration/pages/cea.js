class Cea {
    
    getVisitSite(){
        cy.visit('https://www.cea.com.br/');
    }

    acceptCookies(){
        return cy
                .get('button')
                .contains('Aceitar todos os cookies')
                .click({force:true});
    }

    assertHeaders(value){
        return cy
                .get('.vtex-menu-2-x-styledLinkContent')
                .eq(1)
                .should(value);
    }

    loginSite(loginEmail, senha){
        return cy
                .get('.cea-cea-store-theme-0-x-header-login')
                .click()
                .get('.vtex-button__label')
                .contains('entrar')
                .click({force:true})
                .get('#L_email')
                .type(loginEmail)
                .get('#senha-login')
                .type(senha)
                .get('#enviar')
                .click();
    }

}
export default new Cea();