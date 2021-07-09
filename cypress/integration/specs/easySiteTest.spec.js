import easyevents from '../../pages/easySite';

describe('Tests e2e Site Easy2Events', () => {
  it('visit Site', () => {
    easyevents.getVisitSite();
  });

  it('verify header site', () => {
    easyevents.assertHeader('\n          Sobre\n        ', '\n          Serviço\n        ', '\n          Contato\n        ');
  });

  it('Send Email via Form', () => {
    easyevents.sendEmailViaForm('Fabricio Augusto', 'fabricioaaugusto@gmail.com', 'Gostei do site', 'Parabens Pelo Site');
  });

  it('Register new User', () =>{
    easyevents.registerNewUser('fabricioaaugusto@gmail.com', 'Fabricio', 'Oliveira', '09/01/1996');
  });

})  
