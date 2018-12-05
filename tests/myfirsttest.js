module.exports = {
  // browser given as default input always
  "Demo Test Google": function(browser) {
    browser
      .url("http://google.com")
      // 1000 - time to wait for the el to be visible
      .waitForElementVisible("body", 1000)
      .setValue("input[type=text]", "nightwatch")
      .waitForElementVisible("input[name=btnK]", 1000)
      .click("input[name=btnK]")
      .pause(1000)
      .end();
  }
};
