describe('My First Test', () => {
    it('visit Site', () => {
      cy.visit('https://easyevents-v2.herokuapp.com/');
    });

    it('verify header site', () => {
      cy
        .get('#mainNav')
        .find('.nav-item')
        .eq(0)
        .should('have.text', '\n          Sobre\n        ')
        .get('#mainNav')
        .find('.nav-item')
        .eq(1)
        .should('have.text', '\n          Serviço\n        ')
        .get('#mainNav')
        .find('.nav-item')
        .eq(2)
        .should('have.text', '\n          Contato\n        ');
    });
})  
