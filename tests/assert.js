module.exports = {
   // TODO: Add @tags
  // On why the standard that strings cannot begin with numbers exists: https://stackoverflow.com/questions/342152/why-cant-variable-names-start-with-numbers
  "@tags": ["jelly", "sanity"],
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

    // Use this only if you want the tests to continue EVEN if the page is not visible:
    // browser
    //   .url(browser.launch_url)
    //   // Switch to xPath Locator Syntax
    //   .useXpath()
    //   .verify.visible("//img")
    //   .end();
  },

  test_1:
    // !! THIS TEST IS IGNORED !! ... by turning it into a string
    "" +
    function(browser) {
      // Switch from xPath back to using CSS locator
      browser.url(browser.launch_url).useCss();
      // Checks if the given attribute (href) of an element (a) contains the expected value (google.com).
      browser.assert.attributeContains(
        "img[id=hplogo]",
        "height",
        "92",
        "Error: Logo Height is incorrect, please fix!"
      );
    },
  test_2: function(browser) {
    browser.url(browser.launch_url);
    // Checks if the given attribute (class) of an element (textarea) has the expected value (csi).
    browser.assert.attributeEquals("textarea", "class", "csi").end();
  },

  test_3: function(browser) {
    browser
      .url(browser.launch_url)
      .assert.containsText("a[class=gb_P]", "Gmail")
      .end();
  },
  // see also negation of this: assert.cssClassNotPresent()
  test_4: function(browser) {
    browser
      .url(browser.launch_url)
      .assert.cssClassPresent("div[id=gbwa]>div", "gb_0c")
      .end();
  },
  test_5: function(browser) {
    browser
      .url(browser.launch_url)
      .assert.cssProperty("img[id=hplogo]", "padding-top", "109px")
      .end();
  },
  test_5: function(browser) {
    browser
      .url(browser.launch_url)
      .assert.elementPresent("body")
      .end();
  }
  
};
