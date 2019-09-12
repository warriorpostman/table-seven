import React, { useState } from 'react';
import ReactTableDemo from './ReactTableDemo';
import ReactDataGridDemo from './ReactDataGridDemo';
import AgGridDemo from './AgGridDemo';

import './App.css';

function App() {
  const [gridType, setGridType] = useState('react-table');

  return (
    <div className="App">
      <input type="radio" name="gridType" 
        value="ag-grid"
        checked={gridType === 'ag-grid'}
        onClick={(e) => setGridType(e.target.value)}
      />
      <label>Ag-grid-(react)</label>
      <input type="radio" name="gridType" 
        value="react-data-grid"
        checked={gridType === 'react-data-grid'}
        onClick={(e) => setGridType(e.target.value)}
      />
      <label>react-data-grid</label>
      <input type="radio" name="gridType" 
        value="react-table"
        checked={gridType === 'react-table'}
        onClick={(e) => setGridType(e.target.value)}
      />
      <label>react-table</label>
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
