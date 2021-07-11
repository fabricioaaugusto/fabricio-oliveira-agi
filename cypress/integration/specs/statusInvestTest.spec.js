import statusInvestSite from '../../pages/statusInvestSite'; 

describe('Tests e2e Site StatusInvest', () => {
  it('visit Site', () => {
    statusInvestSite.getVisitSite();
  });

  it('visit close modal if open', () => {
    statusInvestSite.getForCloseModalIfVisible();
  });

})  
