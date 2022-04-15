import ForeverLiss from '../pages/foreverLiss';

describe('My First Test', () => {
    it('visit site', () => {
      ForeverLiss.goSite();
    });

    it('close first modal and accept cookies', () => {
      ForeverLiss.closeFirstModal();
      ForeverLiss.acceptCookies();
    });

    it('verify all Categories', () => {
      ForeverLiss.verifyNavbarAllCategories();
    });

})  
