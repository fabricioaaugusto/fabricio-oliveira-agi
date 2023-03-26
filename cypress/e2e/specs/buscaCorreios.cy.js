import BuscaCEPage from '../../pages/pageBuscaCorreios';

describe('Testando busca CEP', () => {
  beforeEach(function() {
    cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php')
  })
  
  it.only('Fazer uma busca de CEP valido', () => {
    BuscaCEPage.buscarCEPValido('13058381', 'Todos');
  });
 

})  
