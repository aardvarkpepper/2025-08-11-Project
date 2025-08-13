import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import dataCCA3ToName from '../../data/dataCCA3ToName.json' with {type: 'json'};
import type { CCA3ToCountry } from "../../types";

const objCCA3ToCountry: CCA3ToCountry = dataCCA3ToName;

// https://restcountries.com/v3.1/name/{name} ; can be common or official value.
// req fields: official name, native name, population, region, sub region, capital, top level domain, currencies, languages, border countries.

// https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital

// https://restcountries.com/v3.1/name/:name?fields=name,flags,
/**
 * name.common // note common or official may be input in search but that's all right
 * name.nativeName.deu.common; deu = Obj.keys(name.nativeName)[0]
 * population
 * region
 * subregion
 * capital[0] or possibly capital (returns array) // note:  Search for countries with two capitals. (South Africa)
 * flags.svg
 * tld[0] (see above)
 * currencies.EUR.name; EUR = Obj.keys(currencies)[0].  Search for countries with two currencies (Faroe Islands)
 * languages.deu, languages.fra, languages.nld.  Use Obj.keys(languages) and iterate through.  Or perhaps more to the point, Obj.values(languages).  Note orig example reverses the array, possibly alphabetized.
 * borders[0], borders[1] . . . borders: ['FRA', 'DEU', 'LUX', 'NLD'].   Seems I'll have to use fetch on 
 * https://restcountries.com/v3.1/alpha/{code} where FRA or DEU etc.  This is cca3.
 * ?fields=name,population,region,subregion,capital,flags,tld,currencies,languages,borders
 */
export const CountryPage = () => {

  let { country } = useParams();
  const { data, loading, error } = useFetch(`https://restcountries.com/v3.1/name/${country}?fields=name,population,region,subregion,capital,flags,tld,currencies,languages,borders`)

  // console.log('CP, data received', JSON.stringify(data[0]));
  if (loading) {
    return <span className='loader'></span>
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!data) {
    return <span className='loader'></span>;
  } else if (data[0].meals === null) {
    return <div>Data or category not found.</div>
  }

  /**
  {
"name": {
"common": "South Africa",
"official": "Republic of South Africa",
"nativeName": {
"afr": {
"official": "Republiek van Suid-Afrika",
"common": "South Africa"
},
"eng": {
"official": "Republic of South Africa",
"common": "South Africa"
},

   */

  // capitals, currency, languages, borders
  /**
   * 
   * 
   * "currencies": {
"MDL": {
"symbol": "L",
"name": "Moldovan leu"
}
},

"languages": {
"deu": "German",
"fra": "French",
"nld": "Dutch"
},

"borders": [
"FRA",
"DEU",
"LUX",
"NLD"
],
   */
let nativeName, capitalArrayString, currenciesArrayString, languagesArrayString, bordersArray;
  if (data[0]) {

    nativeName = data[0].name.nativeName[Object.keys(data[0].name.nativeName)[0]].common;

    capitalArrayString = data[0].capital.join(', ')
    
    currenciesArrayString = Object.keys(data[0].currencies).map(element => data[0].currencies[element].name).join(', ');
    
    languagesArrayString = Object.values(data[0].languages).join(', ');
    
    bordersArray = data[0].borders;
  }

  return (
    <div>
      <div><button>Back</button></div>
      <div>
        <img src={data[0].flags.svg} alt={`Flag of ${data[0].name.common}`} />
        <div className='section-container'>
          <div>{data[0].name.common}</div>
          <div className='section2'>
            <div><span>Native Name:</span><span>{nativeName}</span></div>
            <div><span>Population:</span><span>{data[0].population}</span></div>
            <div><span>Region:</span><span>{data[0].region}</span></div>
            <div><span>Sub Region:</span><span>{data[0].subregion}</span></div>
            <div><span>Capital:</span><span>{capitalArrayString}</span></div>
          </div>
          <div className='section3'>
            <div><span>Top Level Domain:</span><span>{data[0].tld[0]}</span></div>
            <div><span>Currencies:</span><span>{currenciesArrayString}</span></div>
            <div><span>Languages:</span><span>{languagesArrayString}</span></div>
          </div>
          <div className='section4'>
            <div className="flexh">
              <span>Border Countries:</span>
              {bordersArray.map((element: string) => <button>{objCCA3ToCountry[element]}</button>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}