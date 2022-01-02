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

    loginSite(){
        return cy
                .get('.cea-cea-store-theme-0-x-header-login')
                .click()
                .get('.vtex-button__label')
                .contains('entrar')
                .click({force:true})
                .get('#L_email')
                .type('fabricioaaugusto@gmail.com')
                .get('#senha-login')
                .type('Sensedia2021')
                .get('#enviar')
                .click();
    }

}
export default new Cea();