module.exports = {
  "@tags": ["test3"],
    test_3: function(browser) {
    browser
      .url(browser.launch_url)
      .assert.containsText("a[class=gb_P]", "Gmail")
      .end();
  },
}