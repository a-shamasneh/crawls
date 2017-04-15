import { TendersPage } from './app.po';

describe('tenders App', () => {
  let page: TendersPage;

  beforeEach(() => {
    page = new TendersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
