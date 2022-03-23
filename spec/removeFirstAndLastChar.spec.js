const { removeChar } = require("../removeFirstAndLastChar")

test('Remove First And Last Character', () => {
  expect(removeChar('Privet')).toBe('rive');
  expect(removeChar('Poka')).toBe('ok');
  expect(removeChar('Hello World!')).toBe('ello World')
})
