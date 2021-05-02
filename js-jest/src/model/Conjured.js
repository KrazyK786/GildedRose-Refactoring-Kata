const { Item } = require('./Item');

class Conjured extends Item {
    constructor(sellIn, quality) {
        super(name = 'Conjured', sellIn, quality);
    }

    update(item) {
    }
}

module.exports = { Conjured };