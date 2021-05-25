const { Item } = require('./Item');
const { updateAged } = require('../itemHelpers');

class Brie extends Item {
    constructor(sellIn, quality) {
        super(name = 'Aged Brie',sellIn, quality);
    }

    update() {
        return updateAged(this);
    }
}

module.exports = { Brie };