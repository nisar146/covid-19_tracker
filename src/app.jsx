import React, { useState } from 'react';
import './App.css';
import Home from './components/home/index';
import Search from './components/search/index';

const App = () => {
  const [showSearch, setShowSearch] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        {showSearch ?
          <Home setShowSearch={setShowSearch} />
          : <Search setShowSearch={setShowSearch} />
        }
      </header>
    </div>
  );
}

export default App;
