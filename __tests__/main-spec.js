const isStartLessThanEnd = require('../main');
const isInRange = require('../main');
const createMultiplyTable = require('../main');

it ('should return true when call isStartLessThanEnd function given 2 and 4', () => {
    expect(isStartLessThanEnd(2, 4)).toBe(true);
})

it ('should return true when call isStartLessThanEnd function given 2 and 2', () => {
    expect(isStartLessThanEnd(2, 2)).toBe(true);
})

it ('should return false when call isInRange function given 1001 and 2', () => {
    expect(isInRange(1001, 2)).toBe(false);
})

it ('should return true when call isInRange function given 2 and 1002', () => {
    expect(isInRange(2, 1002)).toBe(false);
})


let multiplyTable = ['2x2=4','3x2=6','3x3=9','4x2=8','4x3=12','4x4=16']

it ('should return false when call isStartLessThanEnd function given 2 and 4', () => {
    expect(createMultiplyTable(2, 4)).toStrictEqual(multiplyTable);
})