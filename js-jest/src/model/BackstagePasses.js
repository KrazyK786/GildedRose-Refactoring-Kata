const { Item } = require('./Item');

class BackstagePasses extends Item {
    constructor(sellIn, quality) {
        super(name = 'Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
    }

    update(item) {
    }
}

module.exports = { BackstagePasses };