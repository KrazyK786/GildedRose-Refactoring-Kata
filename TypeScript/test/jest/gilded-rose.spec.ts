import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const expected = 'foo';
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    const item = items[0];
    expect(item.name).toBe(expected);
  });
});
