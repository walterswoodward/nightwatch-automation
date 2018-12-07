module.exports = {
  "@tags": ["test3"],
  "test3: element contains text: 'Gmail'": function(browser) {
    browser
      .url(browser.launch_url)
      .assert.containsText("a[class=gb_P]", "Gmail")
      .end();
  }
};
