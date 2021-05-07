const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 20000,

  specs: [
    './e2e/account/**/*.spec.ts',
    './e2e/admin/**/*.spec.ts',
    './e2e/entities/**/*.spec.ts',
    /* jhipster-needle-add-protractor-tests - JHipster will add protractors tests here */
  ],

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      binary: process.env.CHROME_BIN,
      args: ['--headless', '--no-sandbox'],
    },
  },

  directConnect: true,

  baseUrl: 'https://google.com/',

  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {},
  },

  beforeLaunch: function () {
    require('ts-node').register({
      project: 'tsconfig.e2e.json',
    });
  },

  onPrepare: function () {
    browser.driver.manage().window().setSize(1280, 1024);
    // Disable animations
    // @ts-ignore
    browser.executeScript('document.body.className += " notransition";');
    const chai = require('chai');
    const chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
    const chaiString = require('chai-string');
    chai.use(chaiString);
    // @ts-ignore
    global.chai = chai;
  },

  useAllAngular2AppRoots: true,
};
