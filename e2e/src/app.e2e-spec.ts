import { browser } from 'protractor';
import { IsentiaProjectPage } from './app.po';

describe('isentia-project App', () => {
  let page: IsentiaProjectPage;

  beforeEach(() => {
    page = new IsentiaProjectPage();
  });

  it('should display the expanded navbar for high resolutions', () => {
    browser.manage().window().setSize(1024, 768);
    page.navigateTo();
    expect(page.getNavbarElement(0)).toEqual('Home');
    expect(page.getNavbarElement(1)).toEqual('Images');
    expect(page.getNavbarButton()).toBeFalsy();
  });

  it('should display the collapsed navbar for low resolutions', () => {
    browser.manage().window().setSize(640, 480);
    page.navigateTo();
    expect(page.getNavbarButton()).toEqual('');
  });
});
