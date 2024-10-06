const test = require('node:test');
const assert = require('node:assert');
const { countSmilyFace } = require('./smily');

test('should count smile face a array [":)", ";(", ";}", ":-D"]', () => {
    const input = [':)', ';(', ';}', ':-D'];
    const expectedOutput = 2;
    const actualOutput = countSmilyFace(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
});

test('should count smile face a array [";D", ":-(", ":-)", ";~)"]', () => {
    const input = [';D', ':-(', ':-)', ';~)'];
    const expectedOutput = 3;
    const actualOutput = countSmilyFace(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
});

test('should count smile face a array [";]", ":[", ";*", ":$", ";-D"]', () => {
    const input = [';]', ':[', ';*', ':$', ';-D'];
    const expectedOutput = 1;
    const actualOutput = countSmilyFace(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
});

test('should count smile face a array [";]", ":[", ";*", ":$"]', () => {
    const input = [";]", ":[", ";*", ":$"];
    const expectedOutput = 0;
    const actualOutput = countSmilyFace(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
});

test('should count smile face empty expected 0', () => {
    const input = [];
    const expectedOutput = 0;
    const actualOutput = countSmilyFace(input);
    assert.deepStrictEqual(actualOutput, expectedOutput);
});