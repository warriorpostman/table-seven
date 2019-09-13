import React from 'react';
import Comparison from './Comparison';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import makeData from './makeData';

import simpleColumns from './demoData';

const AgGridDemo = () => {
  const data = React.useMemo(() => makeData(30), []);
  console.log(data);
  const agGridColumns = simpleColumns.map(col => ({ 
    headerName: col.Header, 
    field: col.accessor,
    sortable: col.Header === 'Age' || col.Header === 'Last Name'
  }));
  console.log(agGridColumns);

  return (
    <div 
      className="ag-theme-balaham"
      style={{
      height: '500px', 
      // width: '600px'
      }}
    >
      <AgGridReact 
        columnDefs={agGridColumns}
        rowData={data}
      >
      </AgGridReact>
    </div>
  );
};


export default AgGridDemo;
