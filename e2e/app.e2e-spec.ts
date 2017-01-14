import { N2firstPage } from './app.po';

describe('n2first App', function() {
  let page: N2firstPage;

  beforeEach(() => {
    page = new N2firstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
