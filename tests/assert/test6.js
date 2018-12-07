module.exports = {
  "@tags": ["test6"],
  "test6: element <body> is present": function(browser) {
    browser
      .url(browser.launch_url)
      .assert.elementPresent("body")
      .end();
  }
};
