const pipe = (...functions) => x => functions.reduce((acc, fn) => fn(acc), x);

const lowerQuality = (item: Item): Item => !isSulfuras(item) && qualityCanBeLowered(item) ? ({ ...item, quality: item.quality - 1 }) : { ...item };
const raiseQuality = (item: Item): Item => qualityCanBeRaised(item) ? ({ ...item, quality: item.quality + 1 }) : { ...item };
const lowerSellIn = (item: Item): Item => !isSulfuras(item) ? ({ ...item, sellIn: item.sellIn - 1 }) : { ...item };
const qualityCanBeRaised = (item: Item): boolean => item.quality < 50;
const qualityCanBeLowered = (item: Item): boolean => item.quality > 0;
const isAgedBrie = (item: Item): boolean => item.name === 'Aged Brie';
const isBackstagePasses = (item: Item): boolean => item.name === 'Backstage passes to a TAFKAL80ETC concert';
const isSulfuras = (item: Item): boolean => item.name === 'Sulfuras, Hand of Ragnaros';

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
      if (!isAgedBrie(this.items[i]) && !isBackstagePasses(this.items[i])) {
        this.items[i] = lowerQuality(this.items[i]);
      } 
      else {
        this.items[i] = raiseQuality(this.items[i]);
        if (isBackstagePasses(this.items[i])) {
          if (this.items[i].sellIn < 11) {
            this.items[i] = raiseQuality(this.items[i]);
          }
          if (this.items[i].sellIn < 6) {
            this.items[i] = raiseQuality(this.items[i]);
          }
        }
      }

      this.items[i] = lowerSellIn(this.items[i]);

      if (this.items[i].sellIn < 0) {
        if (!isAgedBrie(this.items[i])) {
          if (!isBackstagePasses(this.items[i])) {
            this.items[i] = lowerQuality(this.items[i]);
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } 
        else {
          this.items[i] = raiseQuality(this.items[i]);
        }
      }
    }

    return this.items;
  }
}
