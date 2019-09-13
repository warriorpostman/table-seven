import React, { useState } from 'react';
import ReactTableDemo from './ReactTableDemo';
import ReactDataGridDemo from './ReactDataGridDemo';
import AgGridDemo from './AgGridDemo';

import './App.css';

function App() {
  const [gridType, setGridType] = useState('react-table');

  return (
    <div className="App">
      <input 
        type="radio" 
        name="gridType" 
        id="ag-grid-radio"
        value="ag-grid"
        checked={gridType === 'ag-grid'}
        onClick={(e) => setGridType(e.target.value)}
      />
      <label 
        htmlFor="ag-grid-radio"
      >Ag-grid-(react)</label>
      <input type="radio" name="gridType" 
        id="react-data-grid-radio"
        value="react-data-grid"
        checked={gridType === 'react-data-grid'}
        onClick={(e) => setGridType(e.target.value)}
      />
      <label
        htmlFor="react-data-grid-radio"
      >react-data-grid</label>
      <input 
        id="react-table-radio"
        type="radio" name="gridType" 
        value="react-table"
        checked={gridType === 'react-table'}
        onClick={(e) => setGridType(e.target.value)}
      />
      <label
        htmlFor="react-table-radio"
      >react-table</label>
      <div style={{ 
        margin: '3rem' 
      }}>
        { gridType === 'react-data-grid' &&
        <ReactDataGridDemo />
        }
        { gridType === 'react-table' &&
        <ReactTableDemo />
        }
        { gridType === 'ag-grid' &&
        <AgGridDemo />
        }

      </div>
    </div>
  );
}

export default App;
