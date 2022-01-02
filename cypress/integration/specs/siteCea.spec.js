import cea from '../pages/cea';

describe('My First Test', () => {
    it('visit site', () => {
      cea.getVisitSite();
    });

    it('accept cookies', () => {
      cea.acceptCookies();
    });

//    it('verify header site', () => {
//      cea.assertHeaders('novidades');
//    });

    it('login site', () => {
      cea.loginSite('fabricioaaugusto@gmail.com', 'Sensedia2021');
    });

})  
