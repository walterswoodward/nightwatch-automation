module.exports = {
  "@tags": ["test_1"],
  // before: function(browser) {
  //   console.log("Setting up Assert Tests...");
  // },

  // after: function(browser) {
  //   console.log("Closing down Assert Tests...");
  // },
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
  }
}
