import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import SearchResult from './search-result';

const onsubmit = (data, setCountryData) => {
  console.log(data);
  const object = {};
  axios.get('https://api.covid19api.com/summary').then(res => {
    object.Global = res && (res.data.Global)
    object.countryData = res && (res.data.Countries).find(v => v.Country.toLowerCase() === data.countryName.toLowerCase())
    setCountryData(object)
  })
};

const clearAllData = (setCountryData, setInputValue) => {
  setCountryData({});
  setInputValue('');
}

const Search = (props) => {
  const { register, handleSubmit } = useForm();
  const [inputValue, setInputValue] = useState('')
  const [countryData, setCountryData] = useState({});
  const [showGlobal, setShowGlobal] = useState(false);
  console.log(inputValue);
  return (
    <div className="container-fluid custom-padding">
      <button type="button" className="close close-white" aria-label="Close" onClick={() => props.setShowSearch(true)}>
        <span aria-hidden="true">&times;</span>
      </button>
      <p>Get count based on country.</p>
      <div className="search">
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} name="countryName" className="form-control" placeholder="Enter Country Name" ref={register({ required: true })} />
        <span className="ml-3" />
        <button type="button" className="btn btn-outline-primary" onClick={handleSubmit(data => onsubmit(data, setCountryData))}>Search</button>
      </div>
      {showGlobal ? (
        <SearchResult
        countryData={countryData.Global}
        showGlobal={showGlobal}
        setShowGlobal={setShowGlobal}
        setCountryData={setCountryData}
        clearAllData={() => clearAllData(setCountryData, setInputValue)}
        inputValue={countryData.countryData.Country}
        />
      ) : (
          <SearchResult
          countryData={countryData.countryData}
          flag
          showGlobal={showGlobal}
          setShowGlobal={setShowGlobal}
          setCountryData={setCountryData}
          clearAllData={() => clearAllData(setCountryData, setInputValue)}
          />
        )
      }
    </div>
  )
}

export default Search;
