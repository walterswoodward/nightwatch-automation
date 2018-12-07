module.exports = {
  "@tags": ["test4"],
  // see also negation of this: assert.cssClassNotPresent()
  test_4: function(browser) {
    browser
      .url(browser.launch_url)
      .assert.cssClassPresent("div[id=gbwa]>div", "gb_0c")
      .end();
  }
};
