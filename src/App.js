import React from 'react';
import data from './data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';

function App() {

   let products= data.data
  
    return (
      <div className="App">
      <h1>IronStore</h1>
        <FilterableProductTable products={ products } />
      </div>
    );
  }


export default App;