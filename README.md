​This repo contains the cypress test automation suite​

Install required packages
​You can install cypress and the required packages with with 
`npm install` 
`npm install cypress --save-dev` 
`npm install cypress-cucumber-preprocessor --save-dev` 
Add it to your plugins: cypress/plugins/index.js
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => { on('file:preprocessor', cucumber()) } 

Add to cypress.json 
{ "testFiles": "**/*.feature" }​

CypressTest
to run tests do: npm run test​

run in browser
./node_modules/.bin/cypress run

run headless
npx cypress run