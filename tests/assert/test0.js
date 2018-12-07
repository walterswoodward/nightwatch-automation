module.exports = {
  // TODO: Add @tags
  // On why the standard that strings cannot begin with numbers exists: https://stackoverflow.com/questions/342152/why-cant-variable-names-start-with-numbers
  // TO TEST:  npm test --group assert --tag blueberry
  "@tags": ["test0"],
  before: function(browser) {
    console.log("Setting up Assert Tests...");
  },

  after: function(browser) {
    console.log("Closing down Assert Tests...");
  },

  test_0: function(browser) {
    // In contrast to verify.visible(), assert.visible() will end all tests if it fails
    browser
      .url(browser.launch_url)
      .assert.visible("html")
      .end();
  },

  // Use this only if you want the tests to continue EVEN if the page is not visible:
  // browser
  //   .url(browser.launch_url)
  //   // Switch to xPath Locator Syntax
  //   .useXpath()
  //   .verify.visible("//img")
  //   .end();
};

