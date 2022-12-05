const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 900,
  viewportWidth: 1440,
  projectId: "b5ynru",

  e2e: {
    baseUrl:'https://buger-eats-qa.vercel.app',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
