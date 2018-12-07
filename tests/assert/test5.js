module.exports = {
  "@tags": ["test5"],
  "test5: element has prop 'padding-top:109px'": function(browser) {
    browser
      .url(browser.launch_url)
      .assert.cssProperty("img[id=hplogo]", "padding-top", "109px")
      .end();
  }
};
