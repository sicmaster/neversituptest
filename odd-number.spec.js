const test = require('node:test');
const assert = require('node:assert');
const { findOddNumber } = require('./odd-number');

test('should test odd a array [7]', () => {
    const input = [7];
    const expectedOutput = 7;
    const actualOutput = findOddNumber(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
});

test('should test odd a array [0]', () => {
    const input = [0];
    const expectedOutput = 0;
    const actualOutput = findOddNumber(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
});

test('should test odd a array [1,1,2]', () => {
    const input = [1, 1, 2];
    const expectedOutput = 2;
    const actualOutput = findOddNumber(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
});

test('should test odd a array [0,1,0,0,1]', () => {
    const input = [0, 1, 0, 0, 1];
    const expectedOutput = 0;
    const actualOutput = findOddNumber(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
});

test('should test odd a array [1,2,3,4,5,6,7,8,9,0]', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const expectedOutput = 0;
    const actualOutput = findOddNumber(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
});

test('should test odd a array empty', () => {
    const input = [];
    const expectedOutput = 0;
    const actualOutput = findOddNumber(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
});
