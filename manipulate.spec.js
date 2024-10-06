const test = require('node:test');
const assert = require('node:assert');
const { manipulate } = require('./manipulate');

test('should split a string "ab"', () => {
    const input = "ab";
    const expectedOutput = ['ba', 'ab'];
    const actualOutput = manipulate(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
});

test('should split a string "abc"', () => {
    const input = "abc";
    const expectedOutput = ["cba", "bca", "bac", "cab", "acb", "abc"];
    const actualOutput = manipulate(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
});

test('should split a string "aabb"', () => {
    const input = "aabb";
    const expectedOutput = ["bbaa", "bbaa", "baba", "baab", "baba", "abba", "abba", "abab", "baab", "abab", "aabb", "aabb", "bbaa", "bbaa", "baba", "baab", "baba", "abba", "abba", "abab", "baab", "abab", "aabb", "aabb"];
    const actualOutput = manipulate(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
});

test('should split a string empty', () => {
    const input = "";
    const expectedOutput = [];
    const actualOutput = manipulate(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
});