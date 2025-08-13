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
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(`https://restcountries.com/v3.1/name/${country}?fields=name,population,region,subregion,capital,flags,tld,currencies,languages,borders`);

  const handleSubmitCountryeSelect = (event: any) => {
    navigate(`/country/${event.target.name}`);
  }

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

  // Error: HTTP error! status: 404 when country doesn't exist.
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
      <div>
        <br />
        <button onClick={() => navigate(-1)}>Back</button>
        <br />
      </div>

      <div className=''>

        <div className='flex ai-center jc-spaceevenly'>

          <div className='card-large-img-container'>
            <img className='of-contain wh100' src={data[0].flags.svg} alt={`Flag of ${data[0].name.common}`} />
          </div>

          <div className='section-container'>

            <h2>{data[0].name.common}</h2>
            <br />

            <div className='flex jc-spacebetween'>
              <div className='section2'>
                <div><span className='fw-800'>Native Name:</span><span>&nbsp;{nativeName}</span></div>
                <br />
                <div><span className='fw-800'>Population:</span><span>&nbsp;{data[0].population}</span></div>
                <br />
                <div><span className='fw-800'>Region:</span><span>&nbsp;{data[0].region}</span></div>
                <br />
                <div><span className='fw-800'>Sub Region:</span><span>&nbsp;{data[0].subregion}</span></div>
                <br />
                <div><span className='fw-800'>Capital:</span><span>&nbsp;{capitalArrayString}</span></div>
                <br />
                <br />
              </div>
              <div className='section3'>
                <div><span className='fw-800'>Top Level Domain:</span><span>&nbsp;{data[0].tld[0]}</span></div>
                <br />
                <div><span className='fw-800'>Currencies:</span><span>&nbsp;{currenciesArrayString}</span></div>
                <br />
                <div><span className='fw-800'>Languages:</span><span>&nbsp;{languagesArrayString}</span></div>
              </div>
            </div>
            {/* // horizontal container 2 sections; contains 'native name'... and 'top level domain' ... sections */}

            <div className='section4'>
              <div className="flexh">
                <span>Border Countries:</span>
                {bordersArray.map((element: string) => <button key={objCCA3ToCountry[element]} name={objCCA3ToCountry[element]} onClick={handleSubmitCountryeSelect}>{objCCA3ToCountry[element]}</button>)}
              </div>
            </div>

          </div>
          {/* // vertical container 3 sections; title, most country info, and border countries */}

        </div>
        {/* // horizontal container 2 sections; flag, remaining material */}

      </div>

    </div>
  )
}