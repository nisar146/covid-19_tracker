import React from 'react';

const SearchResult = (props) => {
  const countryData = props.countryData;
  const message = props.flag ? `Covid-19 Cases in ${countryData && countryData.Country}` : 'Global Covid-19 Cases';
  const buttonName = props.flag ? `Show Global` : `Show ${props.inputValue && props.inputValue}`;
  return (
    <div>
      {countryData &&
        <div>
          {buttonName === "Show undefined" && (<span className="undefined">Please enter a valid country name.</span>)}
          {buttonName !== "Show undefined" && (<button type="button" className="btn btn-primary mt-2" onClick={() => props.setShowGlobal(!(props.showGlobal))}>{buttonName}</button>)}
          <span className="pl-5" />
          <button type="button" className="btn btn-primary mt-2" onClick={() => props.clearAllData()}>Clear</button>
          <p className="mt-4">{message}</p>
          <div className="row search-result mb-5">
            <div className="card display-card total-confirmed">
              <div className="card-body">
                <p>Total Confirmed</p>
                <p>{countryData && countryData.TotalConfirmed}</p>
              </div>
            </div>
            <span className="ml-3" />
            <div className="card display-card total-recovered">
              <div className="card-body">
                <p>Total Recovered</p>
                <p>{countryData && countryData.TotalRecovered}</p>
              </div>
            </div>
            <span className="ml-3" />
            <div className="card display-card total-deaths">
              <div className="card-body">
                <p>Total Deaths</p>
                <p>{countryData && countryData.TotalDeaths}</p>
              </div>
            </div>
            <span className="ml-3" />
            <div className="card display-card new-confirmed">
              <div className="card-body">
                <p>New Confirmed</p>
                <p>{countryData && countryData.NewConfirmed}</p>
              </div>
            </div>
            <span className="ml-3" />
            <div className="card display-card new-deaths">
              <div className="card-body">
                <p>New Deaths</p>
                <p>{countryData && countryData.NewDeaths}</p>
              </div>
            </div>
            <span className="ml-3" />
            <div className="card display-card new-recovered">
              <div className="card-body">
                <p>New Recovered</p>
                <p>{countryData && countryData.NewRecovered}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default SearchResult;
