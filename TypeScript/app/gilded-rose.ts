const pipe = (...functions) => x => functions.reduce((acc, fn) => fn(acc), x);

const lowerQuality = (item: Item): Item => !isSulfuras(item) && qualityCanBeLowered(item) ? ({ ...item, quality: item.quality - 1 }) : { ...item };
const raiseQuality = (item: Item): Item => qualityCanBeRaised(item) ? ({ ...item, quality: item.quality + 1 }) : { ...item };
const lowerSellIn = (item: Item): Item => !isSulfuras(item) ? ({ ...item, sellIn: item.sellIn - 1 }) : { ...item };
const qualityCanBeRaised = (item: Item): boolean => item.quality < 50;
const qualityCanBeLowered = (item: Item): boolean => item.quality > 0;
const isAgedBrie = (item: Item): boolean => item.name === 'Aged Brie';
const isBackstagePasses = (item: Item): boolean => item.name === 'Backstage passes to a TAFKAL80ETC concert';
const isSulfuras = (item: Item): boolean => item.name === 'Sulfuras, Hand of Ragnaros';

const isExpired = (item: Item): boolean => item.sellIn < 0;
const updateAgedBrieAfterSellIn = (item: Item) => isExpired(item) ? raiseQuality(item) : { ...item };
const updateAgedBrie = (item: Item) => pipe(raiseQuality, lowerSellIn, updateAgedBrieAfterSellIn)(item);

const raiseQualityForBackstagePasses = (item: Item) => {
  let copyItem = { ...item };
  if (item.sellIn < 11 ) copyItem = raiseQuality(copyItem);
  if (item.sellIn < 6 ) copyItem = raiseQuality(copyItem);
  return copyItem;
};
const updateBackstagePassesAfterSellIn = (item: Item) => isExpired(item) ? { ...item, quality: item.quality - item.quality } : { ...item };
const updateBackstagePasses = (item: Item) => pipe(raiseQuality, raiseQualityForBackstagePasses, lowerSellIn, updateBackstagePassesAfterSellIn)(item);

const updateRegularItemAfterSellIn = (item: Item) => isExpired(item) ? lowerQuality(item) : { ...item };
const updateRegularItem = (item: Item) => pipe(lowerQuality, lowerSellIn, updateRegularItemAfterSellIn)(item);


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
      if (isAgedBrie(this.items[i])) {
        this.items[i] = updateAgedBrie(this.items[i]);
      }

      if (isBackstagePasses(this.items[i])){
        this.items[i] = updateBackstagePasses(this.items[i]);
      }

      
      if (!isBackstagePasses(this.items[i]) && !isAgedBrie(this.items[i])) {
        this.items[i] = updateRegularItem(this.items[i]);
      } 
    }

    return this.items;
  }
}
