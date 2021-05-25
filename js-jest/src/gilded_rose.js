const {
  updateMisc,
} = require('./itemHelpers');


class Shop {

  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      item.sellIn--;

      if (typeof item.update === 'function') {
        return item.update();
      } else {
        return updateMisc(item);
      }
    });

    return this.items;
  }
}

module.exports = {
  Shop
}
