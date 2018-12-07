module.exports = {
  "@tags": ["test4"],
  // see also negation of this: assert.cssClassNotPresent()
  "test4: element class='gb_0c'": function(browser) {
    browser
      .url(browser.launch_url)
      .assert.cssClassPresent("div[id=gbwa]>div", "gb_0c")
      .end();
  }
};
