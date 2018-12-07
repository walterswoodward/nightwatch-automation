module.exports = {
  before: function(browser) {
    console.log('Setting up Assert Tests...');
  },

  after: function(browser) {
    console.log('Closing down Assert Tests...');
  },
  'assert[attributeContains, attributeEquals, containsText, cssClassPresent, cssProperty, elementPresent]': function(
    browser
  ) {
    // In contrast to verify.visible(), assert.visible() will end all tests if it fails
    browser
      .url(browser.launch_url)
      .assert.visible('html')
      .useCss();
    browser.assert.attributeContains(
      'img[id=hplogo]',
      'height',
      '92',
      'Error: Logo Height is incorrect, please fix!'
    );
    browser.assert.attributeEquals('textarea', 'class', 'csi');
    browser.assert.containsText('a[class=gb_P]', 'Gmail');
    browser.assert.cssClassPresent('div[id=gbwa]>div', 'gb_0c');
    browser.assert.cssProperty('img[id=hplogo]', 'padding-top', '109px');
    browser.assert.elementPresent('body');
    browser.assert.cssProperty('div[id=cst]', 'visibility', 'visible');
    // assert.hidden()
    // assert.title()
    browser.assert.urlContains('google').end();
  }

  // Use this only if you want the tests to continue EVEN if the page is not visible:
  // browser
  //   .url(browser.launch_url)
  //   // Switch to xPath Locator Syntax
  //   .useXpath()
  //   .verify.visible("//img")
  //   .end();
};
