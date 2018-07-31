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

const googleSearch = searchInput => {
  const matches = googleDatabase.filter(site => {
    return site.includes(searchInput);
  });
  // console.log('running');
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch('cats'));
