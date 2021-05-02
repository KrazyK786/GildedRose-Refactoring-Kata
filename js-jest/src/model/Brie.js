const { Item } = require('./Item');
const { updateAged } = require('../shopHelpers');

class Brie extends Item {
    constructor(sellIn, quality) {
        super(name = 'Aged Brie',sellIn, quality);
    }

    update(item) {
        return updateAged(item);
    }
}

module.exports = { Brie };