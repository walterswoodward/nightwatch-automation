module.exports = {
  url: 'http://google.com',
  before: function(browser) {
    console.log("Setting up Assert Tests...");
  },

  after: function(browser) {
    console.log("Closing down Assert Tests...");
  },
  "@tags": ["demo", "height", "glink"],
               
  "Demo Test Google":
  // This test is ignored by turning it into a string
    "" +
    function(browser) {
      browser.url(url).assert.visible("html");

      browser
        .url(url)
        // Switch to xPath Locator Syntax
        .useXpath()
        .verify.visible("//img")
        .end();
    },

  "Test Google Logo Height": function(browser) {
    // Switch from xPath back to using CSS locator
    browser.url(url).useCss();
    // Checks if the given attribute (href) of an element (a) contains the expected value (google.com).
    browser.assert.attributeContains("img", "height", "92");
    // Checks if the given attribute (class) of an element (textarea) has the expected value (csi).
    browser.assert.attributeEquals("textarea", "class", "csi").end();
  },

  GLink: function(browser) {
    browser
      .url(url)
      .assert.containsText("a[class=gb_P]", "Gmail")
      .end();
  }
};
