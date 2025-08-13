import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import dataCCA3ToName from '../../data/dataCCA3ToName.json' with {type: 'json'};
import type { CCA3ToCountry } from "../../types"; // odd, that it doesn't require 'index' in the file reference.

const objCCA3ToCountry: CCA3ToCountry = dataCCA3ToName;

export const CountryPage = () => {

  let { country } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(`https://restcountries.com/v3.1/name/${country}?fields=name,population,region,subregion,capital,flags,tld,currencies,languages,borders`);

  const handleSubmitCountrySelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/country/${event.currentTarget.name}`);
  }

  if (loading) {
    return <span className='loader'></span>
  } else if (error) {
    return <div><div>Error: {error.message}.  Country not found.</div><div>Please check spelling and capitalization.</div><div>Click 'Where in the world? to return.</div></div>;
  } else if (!data) {
    return <span className='loader'></span>;
  } else if (data[0].meals === null) {
    return <div>Data or category not found.</div>
  }

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

        <div className='flex ai-center jc-spaceevenly flex-wrap'>

          <div className='card-large-img-container flex'>
            <img className='of-contain wh100' src={data[0].flags.svg} alt={data[0].flags.alt} />
          </div>

          <div className='section-container flex-wrap'>
            <div className='ml-20rem'>
              <h2>{data[0].name.common}</h2>
              <br />
            </div>

            <div className='flex flex-wrap'>
              <div className='section2 ml-20rem pr-80rem '>
                <div><span className='fw-800'>Native Name:</span><span>&nbsp;{nativeName}</span></div>
                <br />
                <div><span className='fw-800'>Population:</span><span>&nbsp;{data[0].population.toLocaleString('en-US')}</span></div>
                <br />
                <div><span className='fw-800'>Region:</span><span>&nbsp;{data[0].region}</span></div>
                <br />
                <div><span className='fw-800'>Sub Region:</span><span>&nbsp;{data[0].subregion}</span></div>
                <br />
                <div><span className='fw-800'>Capital:</span><span>&nbsp;{capitalArrayString}</span></div>
                <br />
                <br />
              </div>
              <div className='section3 ml-20rem pr-80rem '>
                <div><span className='fw-800'>Top Level Domain:</span><span>&nbsp;{data[0].tld[0]}</span></div>
                <br />
                <div><span className='fw-800'>Currencies:</span><span>&nbsp;{currenciesArrayString}</span></div>
                <br />
                <div><span className='fw-800'>Languages:</span><span>&nbsp;{languagesArrayString}</span></div>
                <br />
                <br />
              </div>
            </div>
            {/* // horizontal container 2 sections; contains 'native name'... and 'top level domain' ... sections */}

            <div className='section4 ml-20rem'>
              <div className="flex flex-wrap ai-center">
                <span>Border Countries:</span>
                {bordersArray.map((element: string) => <button key={objCCA3ToCountry[element]} name={objCCA3ToCountry[element]} onClick={handleSubmitCountrySelect}>{objCCA3ToCountry[element]}</button>)}
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