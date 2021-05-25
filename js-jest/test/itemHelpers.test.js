// const { Item } = require('../src/model/Item');

const underTest = require('../src/itemHelpers');

describe('itemHelpers', () => {
    let actual;
    let expected;
    let mockItem;

    describe('lowerQuality', () => {
        beforeEach(() => {
            mockItem = {
                quality: 14,
                sellIn: 7
            };
        })
        it('should lower the quality of an item', () => {
            expected = {
                quality: 9,
                sellIn: 7
            };
            actual =  underTest.lowerQuality(mockItem, 5);
            expect(actual).toEqual(expected);
        })
    })
    describe('updateMisc', () => {
        describe('if the quality is greater than 0', () => {
            describe('if the sellIn is less than 0', () => {
                beforeEach(() => {
                    mockItem = {
                        quality: 14,
                        sellIn: -7
                    };
                })
                it('should lower the quality by 2', () => {
                    expected = {
                        quality: 12,
                        sellIn: -7
                    };
                    actual = underTest.updateMisc(mockItem);
                    expect(actual).toEqual(expected);
                })
            })
        })
    })

    describe('updateAged', () => {
        it('', () => {

        })
    })

    describe('updateBackstagePasses', () => {
        it('', () => {

        })
    })
})