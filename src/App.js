import React, { useState } from 'react';
import NewReactTableDemo from './NewReactTableDemo';
import NewReactDataGridDemo from './NewReactDataGridDemo';
import './App.css';

function App() {
  const [gridType, setGridType] = useState('react-table');

  return (
    <div className="App">
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
        { gridType === 'react-table' &&
        <NewReactDataGridDemo />
        }
        { gridType === 'react-data-grid' &&
        <NewReactTableDemo />
        }
      </div>
    </div>
  );
}

export default App;
