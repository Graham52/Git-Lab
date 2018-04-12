const RecordStore = function(name, city, inventory = [], balance = 0) {
  this.name = name;
  this.city = city;
  this.inventory = inventory;
  this.balance = balance;
}

RecordStore.prototype.addRecord = function(record) {
  this.inventory.push(record);
};

RecordStore.prototype.getInventoryValue = function() {
  total = 0;
  this.inventory.forEach((record) => {
    total += record.price;
  });
  return total;
}

module.exports = RecordStore;
