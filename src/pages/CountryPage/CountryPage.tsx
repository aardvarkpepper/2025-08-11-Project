import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import dataCCA3ToName from '../../data/dataCCA3ToName.json' with {type: 'json'};

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
 * capital[0] or possibly capital (returns array) // note:  Search for countries with two capitals.
 * flags.svg
 * tld[0] (see above)
 * currencies.EUR.name; EUR = Obj.keys(currencies)[0].  Search for countries with two currencies.
 * languages.deu, languages.fra, languages.nld.  Use Obj.keys(languages) and iterate through.  Or perhaps more to the point, Obj.values(languages).  Note orig example reverses the array, possibly alphabetized.
 * borders[0], borders[1] . . . borders: ['FRA', 'DEU', 'LUX', 'NLD'].   Seems I'll have to use fetch on 
 * https://restcountries.com/v3.1/alpha/{code} where FRA or DEU etc.  This is cca3.
 */
export const CountryPage = () => {

  // const { data, loading, error } = useFetch(fetchAddress);
  // // console.log('Data received', data);
  // if (loading) {
  //   return <span className='loader'></span>
  // } else if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!data) {
  //   return <span className='loader'></span>;
  // } else if (data.meals === null) {
  //   return <div>Data or category not found.</div>
  // }

  return (
    <div></div>
  )
}