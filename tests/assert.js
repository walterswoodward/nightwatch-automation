module.exports = {
  before: function(browser) {
    console.log("Setting up Assert Tests...");
  },

  after: function(browser) {
    console.log("Closing down Assert Tests...");
  },

  // TODO: Add @tags
  // "@tags": ["demo", "height", "glink"],

  "Test Visibility w/ assert.visible": function(browser) {
    // In contrast to verify.visible(), assert.visible() will end all tests if it fails
    browser
      .url(browser.launch_url)
      .assert.visible("html")
      .end();

    // Use this only if you want the tests to continue EVEN if the page is not visible:
    // browser
    //   .url(browser.launch_url)
    //   // Switch to xPath Locator Syntax
    //   .useXpath()
    //   .verify.visible("//img")
    //   .end();
  },

  "Test Logo Height w/ assert.attributeContains":
    // This test is ignored by turning it into a string
    "" +
    function(browser) {
      // Switch from xPath back to using CSS locator
      browser.url(browser.launch_url).useCss();
      // Checks if the given attribute (href) of an element (a) contains the expected value (google.com).
      browser.assert.attributeContains("img", "height", "92");
    },
  "Test textarea class w/ assert.attributeEquals": function(browser) {
    browser.url(browser.launch_url);
    // Checks if the given attribute (class) of an element (textarea) has the expected value (csi).
    browser.assert.attributeEquals("textarea", "class", "csi").end();
  },

  "Test GLink text w/ assert.containsText": function(browser) {
    browser
      .url(browser.launch_url)
      .assert.containsText("a[class=gb_P]", "Gmail")
      .end();
  }
};
