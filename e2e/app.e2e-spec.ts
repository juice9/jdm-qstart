import { JdmQstartPage } from './app.po';

describe('jdm-qstart App', () => {
  let page: JdmQstartPage;

  beforeEach(() => {
    page = new JdmQstartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
