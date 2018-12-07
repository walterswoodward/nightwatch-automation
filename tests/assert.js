module.exports = {
  '@disabled': true,
  before: function(browser) {
    console.log('Setting up Assert Tests...');
  },

  after: function(browser) {
    console.log('Closing down Assert Tests...');
  },
  'test assert queries': function(browser) {
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
    // SHORTCUT ASSERTS FOR SPECIFIC PROPS:
    // assert.hidden()
    // assert.title()
    // assert.visible()
    // assert.value()
    // assert.valueContains()
    browser.assert.urlContains('google');
    browser.assert.urlEquals('https://www.google.com/');
    browser.end();
  }
};
