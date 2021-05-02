const {
  lowerQuality,
  updateMisc,
  updateAged,
  updateBackstagePasses
} = require('./shopHelpers');

// class Item {
//   constructor(name, sellIn, quality){
//     this.name = name;
//     this.sellIn = sellIn;
//     this.quality = quality;
//   }
// }

class Shop {

  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      item.sellIn--;
      if (item.name.toLowerCase().includes('brie')){
        return updateAged(item);
      } else if (item.name.toLowerCase().includes('sulfuras')){
        return item.sellIn++;
      } else if (item.name.toLowerCase().includes('backstage')){
        return updateBackstagePasses(item);
      } else if (item.name.toLowerCase().includes('conjured')) {
        return lowerQuality(item, 2);
      } else {
        return updateMisc(item);
      }
    });

    return this.items;
  }
}

module.exports = {
  // Item,
  Shop
}
