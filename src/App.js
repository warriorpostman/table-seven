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
        <div>
          <Comparison
            pros={[
            "Built for inline-editing and selection (Excel-like features)",
            "Can navigate by keyboard by default (focus on cell, etc)",
            ]}
            cons={[
            "Uses divs for rows/cells",
            "Requires bootstrap"
            ]}
          />
          <ReactDataGridDemo />
        </div>
        }

        { gridType === 'react-table' &&
        <div>
          <Comparison 
            pros={[
            "Headless...you control table UI from the get-go",
            "Uses custom hooks to supply data"
            ]} 
            cons={[
            "A little tricky if you don't understand how the custom hooks work",
            "Still in 'alpha' version",
            "v7 complete rewrite from the previous < v6. You would have to refactor completely if you were using v6"
            ]}
          />
          <ReactTableDemo />
        </div>
        }
        { gridType === 'ag-grid' &&
        <div>
          <Comparison
            pros={[
            "Not sure yet....good docs? Nice website?",
            ]}
            cons={[
            "Uses divs for rows/cells",
            "Lots of HTML gets generateed...like A LOT.",
            "It's not a pure React solution.",
            "Free vs paid version.  Not sure where paid-version features start"
            ]}
          />
          <AgGridDemo />
        </div>
        }

      </div>
    </div>
  );
}

export default App;
