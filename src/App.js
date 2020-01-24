import React from 'react';
import './App.css';
import data from "./services/data.js";

function App() {
  return (
    <div className="AppStart">
      <header className="App-header">
       <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </header>
    </div>
  );
}

export default App;
