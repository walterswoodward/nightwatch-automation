module.exports = {
  "@tags": ["test2"],
  "test2: textarea class='csi'": function(browser) {
    browser.url(browser.launch_url);
    // Checks if the given attribute (class) of an element (textarea) has the expected value (csi).
    browser.assert.attributeEquals("textarea", "class", "csi").end();
  }
};
