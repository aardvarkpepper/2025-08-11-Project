import { useContext, useState, useEffect } from "react";
import { SearchAndFilterBar } from "../../components/SearchAndFilterBar";
import { useRegionFilter } from "../../hooks/useRegionFilter";
import { RegionContext } from "../../contexts/contexts";
import data from '../../data/data.json' with {type: 'json'};

export const HomePage = () => {
  const  { region, setRegion } = useContext(RegionContext);
  console.log(`HomePage Region: ${region}`);
  return (
    <div>
      <div>{region}</div>
      <SearchAndFilterBar />
      <div>Home Page</div>
      {data.filter(element => element.region === region).map(element => <div>{element.name}</div>)}
    </div>
  )
}