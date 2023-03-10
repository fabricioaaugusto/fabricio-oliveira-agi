import agibankPage from '../../pages/blogAgi';

describe('Testes AgiBank', () => {
  beforeEach(function() {
    cy.visit('https://blogdoagi.com.br/')
  })
  
  it('Fazer uma busca com resultado valido', () => {
    agibankPage.buscarResultadoValido('Banco', 'Resultados da busca por: Banco');
  });
 
  it('Fazer uma busca sem nenhum resultado', () => {
    agibankPage.buscarNenhumResultado('****', 'Nenhum resultado');
  });

})  
