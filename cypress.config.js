const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "u3eumm",
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
  env: {
      url: 'https://rahulshettyacademy.com/'
   },
   retries: {
    runMode: 2,
    openMode: 2
   }
});