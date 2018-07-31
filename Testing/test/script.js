const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'dogs.com',
  'welovepets.com',
  'ballislife.com',
  'anotherwebsite.com',
  'myfavecats.com',
  'flowers.com',
  'catloversinc.com'
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter(site => {
    return site.includes(searchInput);
  });
  // console.log('running');
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = googleSearch;

console.log(googleSearch('cats', googleDatabase));
