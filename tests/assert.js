module.exports = {
  before: function(browser) {
    console.log("Setting up...");
  },

  after: function(browser) {
    console.log("Closing down...");
  },
  "Demo Test Google": function(browser) {
    browser
    .url("http://google.com")
    .assert.visible("html");

    browser
    .url("http://google.com")
    .verify.visible("html");
  }
};
