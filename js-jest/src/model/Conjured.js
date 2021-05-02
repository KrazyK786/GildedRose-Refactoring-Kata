const { Item } = require('./Item');
const { lowerQuality } = require('../shopHelpers');

class Conjured extends Item {
    constructor(sellIn, quality) {
        super(name = 'Conjured', sellIn, quality);
    }

    update() {
        return lowerQuality(this, 2);
    }
}

module.exports = { Conjured };