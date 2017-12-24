describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should have a history', function() {
    add(1, 2);
    add(3, 4);
    add(3, 4);


    expect(history.count()).toEqual(3);

    add(5, 6);
    expect(latestResult.getText()).toEqual('11');
    expect(history.count()).toEqual(4); // This is wrong!
  });
});