module.exports = {
  before: function(browser) {
    console.log("Setting up Assert Tests...");
  },

  after: function(browser) {
    console.log("Closing down Assert Tests...");
  },

  // TODO: Add @tags
  // "@tags": ["demo", "height", "glink"],

  "0": function(browser) {
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

  "1":
    // This test is ignored by turning it into a string
    "" +
    function(browser) {
      // Switch from xPath back to using CSS locator
      browser.url(browser.launch_url).useCss();
      // Checks if the given attribute (href) of an element (a) contains the expected value (google.com).
      browser.assert.attributeContains(
        "img",
        "height",
        "92",
        "Error: Logo Height is incorrect, please fix!"
      );
    },
  "2": function(browser) {
    browser.url(browser.launch_url);
    // Checks if the given attribute (class) of an element (textarea) has the expected value (csi).
    browser.assert.attributeEquals("textarea", "class", "csi").end();
  },

  "3": function(browser) {
    browser
      .url(browser.launch_url)
      .assert.containsText("a[class=gb_P]", "Gmail")
      .end();
  },
  "4": function(
    browser
  ) {
    browser
      .url(browser.launch_url)
      .assert.cssClassPresent("div[id=gbwa]>div", "gb_0c")
      .end();
  }
};
