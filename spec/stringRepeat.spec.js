const { repeatStr } = require("../stringRepeat")

test('String Repeat', () => {
  expect(repeatStr(3, '*')).toBe('***');
  expect(repeatStr(5, 'Hello')).toBe('Hello'.repeat(5));
  expect(repeatStr(2, '__')).toBe('____');
})
