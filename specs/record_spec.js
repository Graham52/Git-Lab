const assert = require('assert');
const Record = require('../record.js');

describe('Record', function() {

  let record1;

  beforeEach(function() {
    record1 = new Record('Madonna', 'True Blue', 'pop', 5);
  });

  it('should have an artist', function() {
    assert.strictEqual(record1.artist, 'Madonna');
  });

  it('should have an title', function() {
    assert.strictEqual(record1.title, 'True Blue');
  });

  it('should have an genre', function() {
    assert.strictEqual(record1.genre, 'pop');
  });

});
