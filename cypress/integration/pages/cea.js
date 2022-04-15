class ForeverLiss {
    
    goSite(){
        cy.visit('https://www.foreverliss.com.br/');
    }

    closeFirstModal(){
        return cy
                .get('.modal-close')
                .click();
    }

    acceptCookies(){
        return cy
                .get('.consent-give')
                .contains('Continuar')
                .click();
    }

    verifyNavbarAllCategories(){
        return cy
                .get('.navbar-categories-nv-0')
                .eq(2)
                .contains('have.text', 'wwww')
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
export default new ForeverLiss();