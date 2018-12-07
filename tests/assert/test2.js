module.exports = {
  "@tags": ["test2"],
  test_2: function(browser) {
    browser.url(browser.launch_url);
    // Checks if the given attribute (class) of an element (textarea) has the expected value (csi).
    browser.assert.attributeEquals("textarea", "class", "csi").end();
  }
};
