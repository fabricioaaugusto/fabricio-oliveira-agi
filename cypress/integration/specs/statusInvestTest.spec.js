import statusInvestSite from '../pages/statusInvestSite'; 

describe('Tests e2e Site StatusInvest', () => {
  it('visit site status invest', () => {
    statusInvestSite.getVisitSite();
  });

  it('visit close modal if open', () => {
    statusInvestSite.getForCloseModalIfVisible();
  });

  it('validate headers of site', () => {
    statusInvestSite.getAssertHeader('INTERNACIONAL', 'www', 'www', 'www', 'ww', 'www');
  });

});  
