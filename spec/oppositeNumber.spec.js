const {opposite} = require('../oppositeNumber.js');

test('Opposite Number', () => {
  expect(opposite(2)).toBe(-2);
  expect(opposite(1)).toBe(-1);
  expect(opposite(3)).toBe(-3);
  expect(opposite(100)).toBe(-100);
});

