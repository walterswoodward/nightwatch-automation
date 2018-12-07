module.exports = {
  "@tags": ["test6"],
  test_6: function(browser) {
    browser
      .url(browser.launch_url)
      .assert.elementPresent("body")
      .end();
  }
};
