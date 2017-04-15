import { ImitateCnodejsPage } from './app.po';

describe('imitate-cnodejs App', () => {
  let page: ImitateCnodejsPage;

  beforeEach(() => {
    page = new ImitateCnodejsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
