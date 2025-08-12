import data from '../data/data.json' with {type: 'json'};

const extractRegions = (arrayOfObjects = data) => {
  const regionSet = new Set (arrayOfObjects.map(element => element.region));
  return Array.from(regionSet);
};

// console.log(extractRegions()); // ['Asia', 'Europe', 'Africa', 'Oceania', 'Americas', 'Polar', 'Antarctic Ocean', 'Antarctic']