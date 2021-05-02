class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {

  constructor(items=[]){
    this.items = items;
  }

  raiseQuality(item, increment) {
    if (item.quality < 50){
      item.quality += increment;
    }
    return item;
  }

  lowerQuality(item, increment) {
    item.quality -= increment;
    return item;
  }

  updateMisc(miscItem) {
    if (miscItem.quality > 0){
      if (miscItem.sellIn < 0){
        miscItem.quality--;
        miscItem.quality--;
      } else {
      miscItem.quality--;
      }
    }
    return miscItem;
  }

  updateAged(agedItem) {
   return this.raiseQuality(agedItem, 1);
  }

  updateBackstagePasses(backstagePassItem) {
    const sellInValue = backstagePassItem.sellIn;
    if (sellInValue > 10) {
      this.raiseQuality(backstagePassItem, 1);
    } else if ((sellInValue > 5) && (sellInValue <= 10)){
      this.raiseQuality(backstagePassItem,2);
    } else if ((sellInValue > 0) && (sellInValue < 5)){
      this.raiseQuality(backstagePassItem, 3);
    } else {
      backstagePassItem.quality = 0;
    }

    return backstagePassItem;
  }

  updateQuality() {
    this.items.forEach((item) => {
      item.sellIn--;
      if (item.name.toLowerCase().includes('brie')){
        return this.updateAged(item);
      } else if (item.name.toLowerCase().includes('sulfuras')){
        return item.sellIn++;
      } else if (item.name.toLowerCase().includes('backstage')){
        return this.updateBackstagePasses(item);
      } else if (item.name.toLowerCase().includes('conjured')) {
        return this.lowerQuality(item, 2);
      } else {
        return this.updateMisc(item);
      }
    })

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
