const assert = require('assert');
const Record = require('../record.js');

describe('Record', function() {

  let record1;

  beforeEach(function() {
    record1 = new Record('Madonna', 'True Blue', 'pop', 5);
  });

  it('should have an artist', function() {
    const actual = record1.artist;
    assert.strictEqual(actual, 'Madonna');
  });

});
