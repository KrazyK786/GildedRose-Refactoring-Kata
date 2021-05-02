

const raiseQuality = (item, increment) => {
    if (item.quality < 50){
        item.quality += increment;
    }
    return item;
}

module.exports.lowerQuality = (item, increment) => {
    item.quality -= increment;
    return item;
}

module.exports.updateMisc = (miscItem) => {
    if (miscItem.quality > 0){
        if (miscItem.sellIn < 0){
            miscItem.quality--;
            miscItem.quality--;
        } else {
            miscItem.quality--;
        }
    }
    return miscItem;
}

module.exports.updateAged = (agedItem) => {
    return raiseQuality(agedItem, 1);
}

module.exports.updateBackstagePasses = (backstagePassItem) => {
    const sellInValue = backstagePassItem.sellIn;
    if (sellInValue > 10) {
        raiseQuality(backstagePassItem, 1);
    } else if ((sellInValue > 5) && (sellInValue <= 10)){
        raiseQuality(backstagePassItem,2);
    } else if ((sellInValue > 0) && (sellInValue < 5)){
        raiseQuality(backstagePassItem, 3);
    } else {
        backstagePassItem.quality = 0;
    }

    return backstagePassItem;
}