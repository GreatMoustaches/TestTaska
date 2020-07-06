//Hidden element

describe('Dynamic loading', () => {
    beforeEach(() => {
    browser.ignoreSynchronization = true;
    browser.get('https://the-internet.herokuapp.com/dynamic_loading/1');
    })
    
    it('Should wait until Hello World! appears', () => {

    element(by.css('button')).click();
    var helloW = element(by.xpath('//div[@id="finish"]/h4'));
    // browser.sleep(10000);

        // driver.wait

    
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(helloW), 10000);

    expect(helloW.isDisplayed()).toBe(true);

    });

});

//Render after element
/*
describe('Dynamic loading', () => {
    beforeEach(() => {
    browser.ignoreSynchronization = true;
    browser.get('https://the-internet.herokuapp.com/dynamic_loading/2');
    })
    
    it('Should wait until Hello World! appears', () => {

    element(by.css('button')).click();
    var helloW = element(by.xpath('//div[@id="finish"]/h4'));
    // browser.sleep(10000);

        // driver.wait

    
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(helloW), 10000);

    expect(helloW.isDisplayed()).toBe(true);

    });

});
*/