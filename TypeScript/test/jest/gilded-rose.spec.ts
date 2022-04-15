import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  describe('updateQuality', () => {
    it('should not change the item name', () => {
      const expected = 'foo';
      const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
      const items = gildedRose.updateQuality();
      const item = items[0];
      expect(item.name).toBe(expected);
    });

    describe('for regular items', () => {
      it('should not lower the item quality if quality is less than 1', () => {
        const expected = 0;
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        const item = items[0];
        expect(item.quality).toBe(expected);
      });
      it('should lower the item quality if quality is greter than 0 and sellin is above 0', () => {
        const expected = 1;
        const gildedRose = new GildedRose([new Item('foo', 1, 2)]);
        const items = gildedRose.updateQuality();
        const item = items[0];
        expect(item.quality).toBe(expected);
      });
      it('should lower the item quality by 2 if quality is greter than 0 and sellin is 0 or below', () => {
        const expected = 0;
        const gildedRose = new GildedRose([new Item('foo', 0, 2)]);
        const items = gildedRose.updateQuality();
        const item = items[0];
        expect(item.quality).toBe(expected);
      });
      it('should lower the item sellIn if greater than 0', () => {
        const expected = 1;
        const gildedRose = new GildedRose([new Item('foo', 2, 2)]);
        const items = gildedRose.updateQuality();
        const item = items[0];
        expect(item.sellIn).toBe(expected);
      });
    });
    
    describe('for Aged Brie', () => {
      it('should raise the quality if quality is less than 50', () => {
        const expected = 3;
        const gildedRose = new GildedRose([new Item('Aged Brie', 2, 2)]);
        const items = gildedRose.updateQuality();
        const item = items[0];
        expect(item.quality).toBe(expected);
      });
    });
  });
});
