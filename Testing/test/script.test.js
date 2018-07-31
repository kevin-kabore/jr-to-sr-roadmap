const googleSearch = require('./script');

dbMock = ['cat.com', 'dog.com', 'food.com', 'catlovers.com'];
it('should execute this test', () => {
  expect(1).toEqual(1);
});

it('is searching with the googleSearch function', () => {
  expect(googleSearch('test', dbMock)).toEqual([]);
  expect(googleSearch('cat', dbMock)).toEqual(['cat.com', 'catlovers.com']);
});
