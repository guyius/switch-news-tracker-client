import { SwitchNewsTrackerClientPage } from './app.po';

describe('switch-news-tracker-client App', () => {
  let page: SwitchNewsTrackerClientPage;

  beforeEach(() => {
    page = new SwitchNewsTrackerClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
