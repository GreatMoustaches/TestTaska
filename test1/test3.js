describe('File upload', () => {
    beforeEach(() => {
    browser.ignoreSynchronization = true;
    browser.get('https://the-internet.herokuapp.com/upload');
    browser.sleep(2000);
    })
 
    it('Uploading  file and assertions', () => {
 
 
var path = require('path');
 
var fileToUpload = '../SomeD.txt';
var absolutePath = path.resolve(__dirname, fileToUpload);
 
var fileElem = element(by.css('input[type="file"]'));
 
 
fileElem.sendKeys(absolutePath);
// take a breath
browser.driver.sleep(100);
 
// click upload button
element(by.id('file-submit')).click(); // does post request
 
expect(element(by.xpath('//div[@class="example"]/h3')).getText()).toBe('File Uploaded!');
expect(element(by.id('uploaded-files')).getText()).toBe('SomeD.txt');
 
    });
 
});