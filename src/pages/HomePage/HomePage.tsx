import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchAndFilterBar } from "../../components/SearchAndFilterBar";
import { RegionContext } from "../../contexts/contexts";
import { useFetch } from "../../hooks/useFetch";

// import data from '../../data/data.json' with {type: 'json'};

export const HomePage = () => {
  const { region} = useContext(RegionContext);
  const navigate = useNavigate();
  let fetchAddress = 'https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital';
  if (region) {
    fetchAddress = `https://restcountries.com/v3.1/region/${region}?fields=name,flags,region,population,capital`;
  }

  const { data, loading, error } = useFetch(fetchAddress);
  console.log('Data received', data);
  if (loading) {
    return <span className='loader'></span>
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!data) {
    return <span className='loader'></span>;
  } else if (data.meals === null) {
    return <div>Data or category not found.</div>
  }

  // Time running a bit short, or I'd change mapped div to button.
  return (
    <div>
      <SearchAndFilterBar />
      <div>
        <div className='cards-container jc-center'>
          {data.filter((element: any) => region === "" || element.region === region).map((element: any) =>
            <div key={`homepage-${element.name.common}`} className='dark-alt card' tabIndex={0} onClick={() => navigate(`./country/${element.name.common}`)} onKeyDown={(event) => event.key === 'Enter' ? navigate(`./country/${element.name.common}`) : null}>
              <div className='card-img-container'>
                <img src={element.flags.png} className='of-contain wh100' />
              </div>
              <div className='card-content'>
                <div className='fw-800 card-title'>{element.name.common}</div>
                <div><span className='fw-800'>Population:</span> {element.population}</div>
                <div><span className='fw-800'>Region:</span> {element.region}</div>
                <div><span className='fw-800'>Capital:</span> {element.capital}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}