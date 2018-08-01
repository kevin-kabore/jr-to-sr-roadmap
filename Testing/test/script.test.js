const googleSearch = require('./script');

dbMock = ['cat.com', 'dog.com', 'food.com', 'catlovers.com'];
it('should execute this test', () => {
  expect(1).toEqual(1);
});

describe('googleSearch', () => {
  it('is searching with the googleSearch function', () => {
    expect(googleSearch('test', dbMock)).toEqual([]);
    expect(googleSearch('cat', dbMock)).toEqual(['cat.com', 'catlovers.com']);
  });

  it('should work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('should not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
});
