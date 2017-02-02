import { MeetupfrontPage } from './app.po';

describe('meetupfront App', function() {
  let page: MeetupfrontPage;

  beforeEach(() => {
    page = new MeetupfrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
