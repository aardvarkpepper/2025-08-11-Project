// import data from '../data/data.json' with {type: 'json'};
// import dataNameCCA3 from '../data/dataNameCCA3.json' with {type: 'json'};

// const extractRegions = (arrayOfObjects = data) => {
//   const regionSet = new Set (arrayOfObjects.map(element => element.region));
//   return Array.from(regionSet);
// };

// console.log(extractRegions()); // ['Asia', 'Europe', 'Africa', 'Oceania', 'Americas', 'Polar', 'Antarctic Ocean', 'Antarctic']

// const extractCCA3 = (arrayOfObjects = dataNameCCA3) => {
//   const returnObject: { [key: string] : string } = {};
//   for (let i = 0; i < arrayOfObjects.length; i++) {
//     returnObject[(dataNameCCA3[i].cca3)] = dataNameCCA3[i].name.common
//   }
//   const retKeys = Object.keys(returnObject);
//   let retString = "{"
//   for (let i = 0; i < retKeys.length; i++) {
//     retString += `\n"${retKeys[i]}": "${returnObject[retKeys[i]]}",`
//   }
//   retString += `\n}`;
//   return retString;
// }

// console.log(JSON.stringify(extractCCA3()));
// console.log(extractCCA3());

