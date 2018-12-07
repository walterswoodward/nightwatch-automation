module.exports = {
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
      browser.url('http://google.com').assert.visible("html");

      browser
        .url('http://google.com')
        // Switch to xPath Locator Syntax
        .useXpath()
        .verify.visible("//img")
        .end();
    },

  "Test Google Logo Height": function(browser) {
    // Switch from xPath back to using CSS locator
    browser.url('http://google.com').useCss();
    // Checks if the given attribute (href) of an element (a) contains the expected value (google.com).
    browser.assert.attributeContains("img", "height", "92");
    // Checks if the given attribute (class) of an element (textarea) has the expected value (csi).
    browser.assert.attributeEquals("textarea", "class", "csi").end();
  },

  GLink: function(browser) {
    browser
      .url('http://google.com')
      .assert.containsText("a[class=gb_P]", "Gmail")
      .end();
  }
};
