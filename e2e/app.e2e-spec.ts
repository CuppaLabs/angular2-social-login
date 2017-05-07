import { Angular2SocialLoginPage } from './app.po';

describe('angular2-social-login App', () => {
  let page: Angular2SocialLoginPage;

  beforeEach(() => {
    page = new Angular2SocialLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
