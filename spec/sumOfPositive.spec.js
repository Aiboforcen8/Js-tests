const { positiveSum } = require('../sumOfPositive')

test('Sum Of Postive', () => {
  expect(positiveSum([1,2,3])).toEqual(6);
  expect(positiveSum([2,5,6])).toEqual(2+5+6);
  expect(positiveSum([-1,-10,20])).toEqual(20);
})
