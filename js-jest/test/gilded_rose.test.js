const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  describe('All items', () => {
    const gildedRose = new Shop([new Item("foo", 5, 6)]);

    it("should have a name", function () {
      // const gildedRose = new Shop([new Item("foo", 0, 0)]);
      // const items = gildedRose.updateQuality();
      expect(gildedRose.items[0].name).toBe("foo");
    });

    it("should have a sellIn value", function () {

      expect(gildedRose.items[0].sellIn).toBe(5);
    });

    it("should have a quality value", function () {
      // const gildedRose = new Shop([new Item("foo", 5, 6)]);
      expect(gildedRose.items[0].quality).toBe(6);
    });
  });

  describe('Quality value of an item', () => {
    describe('At the end of each day', () => {
      describe('if quality is above 0', () => {
        it('should decrease the Quality value by 1', () => {
          const gildedRose = new Shop([new Item("foo", 5, 10)]);
          const items = gildedRose.updateQuality();
          expect(items[0].quality).toBe(9);
        });

      })

      describe('if quality is 0', () => {
        it('should not decrease the Quality value', () => {
          const gildedRose = new Shop([new Item("foo", 10, 0)]);
          const items = gildedRose.updateQuality();
          expect(items[0].quality).toBe(0);
        });
      })

      describe('if the sellIn is negative', () => {
        it('should decrease the Quality value by a factor of 2', () => {
          const gildedRose = new Shop([new Item("foo", -1, 10)]);
          const items = gildedRose.updateQuality();
          expect(items[0].quality).toBe(8);
        });
      })

      describe('for Sulfuras', () => {
        it("should not decrease the quality value", () => {
          const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 15)]);
          const items = gildedRose.updateQuality();
          expect(items[0].quality).toBe(15);
        });
      });

      describe('for Aged Brie', () => {
        describe('At the end of each day', () => {
          it('should increase quality value by 1', () => {
            const gildedRose = new Shop([new Item("Aged Brie", 10, 20)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toBe(21);
          })

          it('should not increase quality value past 50', () => {
            const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toBe(50);
          })
        })
      })

      describe('for Backstage passes', () => {
        describe('At the end of each day', () => {
          describe('if sellIn > 10 days', () => {
            it('should increase quality by 1', () => {
              const gildedRose = new Shop([new Item(
                  'Backstage passes to a TAFKAL80ETC concert',
                  12,
                  10
              )]);
              const items = gildedRose.updateQuality();
              expect(items[0].quality).toBe(11);
            })
          })

          describe('if 5 < sellIn <= 10 days', () => {
            it('should increase quality by 2', () => {
              const gildedRose = new Shop([new Item(
                  'Backstage passes to a TAFKAL80ETC concert',
                  7,
                  10
              )]);
              const items = gildedRose.updateQuality();
              expect(items[0].quality).toBe(12);
            })
          })

          describe('if sellIn <= 5 days', () => {
            it('should increase quality by 3', () => {
              const gildedRose = new Shop([new Item(
                  'Backstage passes to a TAFKAL80ETC concert',
                  5,
                  10
              )]);
              const items = gildedRose.updateQuality();
              expect(items[0].quality).toBe(13);
            })
          })

          describe('if sellIn < 0 days', () => {
            it('should set quality to 0', () => {
              const gildedRose = new Shop([new Item(
                  'Backstage passes to a TAFKAL80ETC concert',
                  -1,
                  10
              )]);
              const items = gildedRose.updateQuality();
              expect(items[0].quality).toBe(0);
            })
          })
        })
      })

      describe('for Conjured', () => {
        describe('At the end of each day', () => {
          it('should decrease the Quality value by a factor of 2', () => {
            const gildedRose = new Shop([new Item('Conjured', 5, 10)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toBe(8);
          });
        })
      })

    })
  })

  describe('SellIn value of an item', () => {
    describe('At the end of each day', () => {
      it('should decrease by 1', () => {
        const gildedRose = new Shop([new Item("foo", 10, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(9);
      })
  //
      describe('for Sulfuras', () => {
        it("should not decrease the sellIn value", () => {
          const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 0)]);
          const items = gildedRose.updateQuality();
          expect(items[0].sellIn).toBe(10);
        });
      });
    })
  })
});
