const loadBundle = require('../../src/loadBundle');
const bundle = require('../elm/EXM130-7.3.000-fixture-bundle.json');
const result = require('../elm/exm130-elm-files.json');

test(`loadBundle.js returns the correct elm json`, () => {
  expect(loadBundle(bundle)).toEqual(result);
});
