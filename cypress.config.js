const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
    video: true,
    //viewportHeight: 800,
    //viewportWidth: 400,
    defaultBrowser: 'chrome',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
