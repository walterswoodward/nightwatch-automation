module.exports = {
  "@tags": ["test5"],
    test_5: function(browser) {
    browser
      .url(browser.launch_url)
      .assert.cssProperty("img[id=hplogo]", "padding-top", "109px")
      .end();
  }
}