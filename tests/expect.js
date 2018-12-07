module.exports = {
  before: function(client) {
    console.log('Setting up Expect Tests...');
  },

  after: function(client) {
    console.log('Closing down Expect Tests...');
  },
  'test expect queries': function(client) {
    client.url(client.globals.xena).pause(1000);

    // expect element  to be present in 1000ms
    client.expect.element('body').to.be.present.before(1000);

    // expect element <#lst-ib> to have css property 'display'
    client.expect.element('body').to.have.css('font-family');

    // // expect element  to have attribute 'class' which contains text 'vasq'
    client.expect
      .element('body')
      .to.have.attribute('class')
      .which.contains('a-m-us');

    // expect element <#lst-ib> to be an input tag
    client.expect.element('#a-page').to.be.an('div');

    // expect element <#lst-ib> to be visible
    // client.expect.element('head').to.be.visible; // Amazon's landing page doesn't have a visibility css selector!

    client.end();
  }
};
