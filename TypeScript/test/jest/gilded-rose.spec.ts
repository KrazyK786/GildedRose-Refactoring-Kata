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
      it('should not lower the item quality if quality is less than 0', () => {
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
    });
  });
});
