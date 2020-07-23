import React from 'react'

const Home = (props) => {
  return (
    <div>
      <p>Hello How are you?</p>
      <p>Hope you are doing good...</p>
      <p>Get latest count of COVID-19 Cases</p>
      <button type="button" className="btn btn-primary" onClick={() => props.setShowSearch(false)}>Search</button>
    </div>
  )
}

export default Home;
