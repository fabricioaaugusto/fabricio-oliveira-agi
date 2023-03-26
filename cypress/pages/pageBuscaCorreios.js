class BuscaCEPage {

    buscarCEPValido(digitaCEP, tipoCEP1){
        cy.intercept('/endereco/*').as('waitCEP')
        cy.get('#endereco')
            .should('be.visible')
            .click()
            .type(digitaCEP)
            .get('#tipoCEP')
            .select(tipoCEP1)
            .get('#btn_pesquisar')
            .click({force: true})
            .get('[data-th="Logradouro/Nome"]')
            .eq(1)
            .should('have.text', 'Rua Maria Estefano Maluf')
    }

}
export default new BuscaCEPage();