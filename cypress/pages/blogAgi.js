class AgibankPage {

    buscarResultadoValido(buscarAlgo, ResBusca){
        cy.get('#search-open')
            .click()
            .get('.desktop-search')
            .click()
            .type(buscarAlgo)
            .get('.search-submit').eq(0)
            .click()
            .get('.archive-title')
            .should('have.text', ResBusca)
    }
    
    buscarNenhumResultado(buscarAlgo, ResBusca){
        cy.get('#search-open')
            .click()
            .get('.desktop-search')
            .click()
            .type(buscarAlgo)
            .get('.search-submit').eq(0)
            .click()
            .get('.entry-title')
            .should('have.text', ResBusca)
    }

}
export default new AgibankPage();