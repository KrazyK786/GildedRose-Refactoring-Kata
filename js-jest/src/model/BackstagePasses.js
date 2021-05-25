const { Item } = require('./Item');
const { updateBackstagePasses } = require('../itemHelpers');

class BackstagePasses extends Item {
    constructor(sellIn, quality) {
        super(name = 'Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
    }

    update() {
        return updateBackstagePasses(this);
    }
}

module.exports = { BackstagePasses };