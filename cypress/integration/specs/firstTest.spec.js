import easyevents from '../pages/easySite';

describe('My First Test', () => {
  it('visit Site', () => {
    easyevents.getVisitSite();
  });

  it('verify header site', () => {
    easyevents.assertHeader('\n          Sobre\n        ', '\n          Serviço\n        ', '\n          Contato\n        ');
  });

    
})  
