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

  it('should have a city', function() {
    assert.strictEqual(store.city, 'Edinburgh');
  });

  it('should have records', function() {
    const record1 = new Record('Offspring', 'Smash', 'Punk', 10);
    const record2 = new Record('Greed Day', 'Dookie', 'Punk', 8);
    const record3 = new Record('Led Zeppelin', 'IV', 'Rock', 5);
    assert.deepStrictEqual(store.inventory, [record1, record2, record3]);
  });

  it('should have a balance', function() {
    assert.strictEqual(store.balance, 5000);
  });

  it('should add records', function() {
    const record1 = new Record('Offspring', 'Smash', 'Punk', 10);
    const record2 = new Record('Greed Day', 'Dookie', 'Punk', 8);
    const record3 = new Record('Led Zeppelin', 'IV', 'Rock', 5);
    const record4 = new Record('Bloodhound Gang', 'Bad touch', 'Pop/rap', 1);
    store.addRecord(record4);
    assert.deepStrictEqual(store.inventory, [record1, record2, record3, record4]);
  });
});
