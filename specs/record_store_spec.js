const assert = require('assert');
const Record = require('../record.js');
const RecordStore = require('../record_store.js');

describe('RecordStore', function() {

  let store = []

  beforeEach(function() {
    const record1 = new Record('Offspring', 'Smash', 'Punk', 10);
    const record2 = new Record('Greed Day', 'Dookie', 'Punk', 8);
    const record3 = new Record('Led Zeppelin', 'IV', 'Rock', 5);
    store = new RecordStore(
      'Bob\'s Records',
      'Edinburgh',
      [record1, record2, record3],
      5000);
  });

  it('should have a name', function() {
    assert.strictEqual(store.name, 'Bob\'s Records');
  });

  xit('should have a city', function() {

  });

  xit('should have records', function() {

  });

  xit('should have a balance', function() {

  });

  xit('should add records', function() {

  });
});
