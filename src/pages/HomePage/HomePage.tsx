import { useContext, useState, useEffect } from "react";
import { SearchAndFilterBar } from "../../components/SearchAndFilterBar";
import { useRegionFilter } from "../../hooks/useRegionFilter";
import { RegionContext } from "../../contexts/contexts";
import data from '../../data/data.json' with {type: 'json'};

export const HomePage = () => {
  const { region, setRegion } = useContext(RegionContext);
  console.log(`HomePage Region: ${region}`);
  return (
    <div>
      <div>{region}</div>
      <SearchAndFilterBar />
      <div>Home Page</div>
      <div className='cards-container'>
        {data.filter(element => element.region === region).map(element => <div key={element.name} className='dark-alt card'>
          <div className='card-img-container'>
            <img src={element.flags.png} className='of-contain wh100' />
          </div>
          <div className='card-content'>
            <div className='fw-800 card-title'>{element.name}</div>
            <div><span className='fw-800'>Population:</span> {element.population}</div>
            <div><span className='fw-800'>Region:</span> {element.region}</div>
            <div><span className='fw-800'>Capital:</span> {element.capital}</div>
          </div>
        </div>)}
      </div>
    </div>
  )
}