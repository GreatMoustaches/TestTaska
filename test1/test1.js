describe('Nested frames component', () => {
  beforeEach(() => {
  browser.ignoreSynchronization = true;
  browser.get('https://the-internet.herokuapp.com/nested_frames');
  browser.sleep(3000);
  })
  
  it('Should show correct text inside the LEFT frame', () => {
  browser.switchTo().frame(element(by.name('frame-top')).getWebElement());
  browser.switchTo().frame(element(by.name('frame-left')).getWebElement());
  
  expect(element(by.tagName('body')).getText()).toBe('LEFT');
  });
  
  it('Should show correct text inside the MIDDLE frame', () => {
  browser.switchTo().frame(element(by.name('frame-top')).getWebElement());
  browser.switchTo().frame(element(by.name('frame-middle')).getWebElement());
  
  expect(element(by.id('content')).getText()).toBe('MIDDLE');
  });
  
  it('Should show correct text inside the RIGHT frame', () => {
  browser.switchTo().frame(element(by.name('frame-top')).getWebElement());
  browser.switchTo().frame(element(by.name('frame-right')).getWebElement());
  
  expect(element(by.tagName('body')).getText()).toBe('RIGHT');
  });
  
  it('Should show correct text inside the BOTTOM frame', () => {
  browser.switchTo().frame(element(by.name('frame-bottom')).getWebElement());
  
  expect(element(by.tagName('body')).getText()).toBe('BOTTOM1');
  });
  
  });