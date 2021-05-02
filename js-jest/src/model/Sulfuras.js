const { Item } = require('./Item');

class Sulfuras extends Item {
    constructor(sellIn, quality) {
        super(name = 'Sulfuras, Hand of Ragnaros', sellIn, quality);
    }

    update(item) {
    }
}

module.exports = { Sulfuras };