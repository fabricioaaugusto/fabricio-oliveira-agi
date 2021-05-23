import easyevents from '../pages/easySite';

describe('Tests Site Easy2Events', () => {
  it('visit Site', () => {
    easyevents.getVisitSite();
  });

  it('verify header site', () => {
    easyevents.assertHeader('\n          Sobre\n        ', '\n          Serviço\n        ', '\n          Contato\n        ');
  });

  it('Send Email via Form', () => {
    easyevents.sendEmailViaForm('Fabricio Augusto', 'fabricioaaugusto@gmail.com', 'Gostei do site', 'Parabens Pelo Site');
  });
})  
