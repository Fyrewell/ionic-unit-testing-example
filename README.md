Ionic2 Seed Project With Testing
=====================

Clone repo, run `npm install`.

Unit Tests
----------

To run the tests, run `npm test`.

See the example test in `src/app/app.component.spec.ts` for an example of a component test.

End-To-End Tests (Browser-Only)
-------------------------------

To install selenium webdriver run:
`npm install -g webdriver-manager`
`webdriver-manager update --standalone false --gecko false`

To serve the app, run `ionic serve`.

To run the end-to-end tests, run (while the app is being served) `npm run e2e`.

See the example end-to-end test in `e2e/app.e2e-spec.ts`.
