const lowerQuality = (item: Item): Item => ({ ...item, quality: item.quality - 1 });
const raiseQuality = (item: Item): Item => ({ ...item, quality: item.quality + 1 });
const lowerSellIn = (item: Item): Item => ({ ...item, sellIn: item.sellIn - 1 });
const qualityCanBeRaised = (item: Item): boolean => item.quality < 50;
const isAgedBrie = (name: string): boolean => name === 'Aged Brie';
const isBackstagePasses = (name: string): boolean => name === 'Backstage passes to a TAFKAL80ETC concert';
const isSulfuras = (name: string): boolean => name === 'Sulfuras, Hand of Ragnaros';

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>; 

  constructor(items = [] as Array<Item>) {
    this.items = items;  
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (!isAgedBrie(this.items[i].name) && !isBackstagePasses(this.items[i].name)) {
        if (this.items[i].quality > 0) {
          if (!isSulfuras(this.items[i].name)) {
            this.items[i] = lowerQuality(this.items[i]);
          }
        }
      } else {
        if (qualityCanBeRaised(this.items[i])) {
          this.items[i] = raiseQuality(this.items[i]);
          if (isBackstagePasses(this.items[i].name)) {
            if (this.items[i].sellIn < 11) {
              if (qualityCanBeRaised(this.items[i])) {
                this.items[i] = raiseQuality(this.items[i]);
              }
            }
            if (this.items[i].sellIn < 6) {
              if (qualityCanBeRaised(this.items[i])) {
                this.items[i] = raiseQuality(this.items[i]);
              }
            }
          }
        }
      }
      if (!isSulfuras(this.items[i].name)) {
        this.items[i] = lowerSellIn(this.items[i]);
      }
      if (this.items[i].sellIn < 0) {
        if (!isAgedBrie(this.items[i].name)) {
          if (!isBackstagePasses(this.items[i].name)) {
            if (this.items[i].quality > 0) {
              if (!isSulfuras(this.items[i].name)) {
                this.items[i] = lowerQuality(this.items[i]);
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (qualityCanBeRaised(this.items[i])) {
            this.items[i] = raiseQuality(this.items[i]);
          }
        }
      }
    }

    return this.items;
  }
}
