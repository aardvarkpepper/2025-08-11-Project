import { useContext, useState, useEffect } from "react";
import { SearchAndFilterBar } from "../../components/SearchAndFilterBar";
import { RegionContext } from "../../contexts/contexts";
import { useFetch } from "../../hooks/useFetch";


// import data from '../../data/data.json' with {type: 'json'};

export const HomePage = () => {
  const { region, setRegion } = useContext(RegionContext);
  // console.log(`HomePage Region: ${region}`);
  let fetchAddress = 'https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital';
  if (region) {
    fetchAddress = `https://restcountries.com/v3.1/region/${region}?fields=name,flags,region,population,capital`;
  }
  // console.log('Fetching:', fetchAddress);

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

  //https://restcountries.com/v3.1/region/europe
  // https://restcountries.com/v3.1/subregion/Northern Europe


  return (
    <div>
      <SearchAndFilterBar />
      <div>
        <div className='cards-container jc-center'>
          {data.filter((element: any) => region === "" || element.region === region).map((element: any) => <div key={`homepage-${element.name.official}`} className='dark-alt card'>
            <div className='card-img-container'>
              <img src={element.flags.png} className='of-contain wh100' />
            </div>
            <div className='card-content'>
              <div className='fw-800 card-title'>{element.name.official}</div>
              <div><span className='fw-800'>Population:</span> {element.population}</div>
              <div><span className='fw-800'>Region:</span> {element.region}</div>
              <div><span className='fw-800'>Capital:</span> {element.capital}</div>
            </div>
          </div>)}
        </div>
      </div>
    </div>
    // <div>
    //   <div>{region}</div>
    //   <SearchAndFilterBar />
    //   <div>Home Page</div>
    //   <div className='cards-container'>
    //     {data.filter(element => element.region === region).map(element => <div key={element.name} className='dark-alt card'>
    //       <div className='card-img-container'>
    //         <img src={element.flags.png} className='of-contain wh100' />
    //       </div>
    //       <div className='card-content'>
    //         <div className='fw-800 card-title'>{element.name}</div>
    //         <div><span className='fw-800'>Population:</span> {element.population}</div>
    //         <div><span className='fw-800'>Region:</span> {element.region}</div>
    //         <div><span className='fw-800'>Capital:</span> {element.capital}</div>
    //       </div>
    //     </div>)}
    //   </div>
    // </div>
  )
}