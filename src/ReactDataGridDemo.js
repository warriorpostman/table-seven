import React, { useState } from 'react';
import ReactDataGrid from 'react-data-grid';
import Comparison from './Comparison';

// import 'bootstrap/dist/css/bootstrap.css';

import makeData from './makeData';

import simpleColumns from './demoData';

const NewReactDataGridDemo = () => {

  const data = React.useMemo(() => makeData(30), []);
  const [rows, setRows] = useState(data);
  // Need to add a 'key' property to each row when using react-data-grid
  const reactDataGridColumns = simpleColumns
    .map(col => ({ 
      ...col, 
      key: col.accessor,
			name: col.Header,
      sortable: true
  }));
  const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
    const comparer = (a, b) => {
      if (sortDirection === "ASC") {
          return a[sortColumn] > b[sortColumn] ? 1 : -1;
        } else if (sortDirection === "DESC") {
          return a[sortColumn] < b[sortColumn] ? 1 : -1;
        }
      };
    return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
  };

  return (
    <ReactDataGrid 
      columns={reactDataGridColumns}
      rowsCount={rows.length}
      rowGetter={i => rows[i]}
      onGridSort={(sortColumn, sortDirection) =>
        setRows(sortRows(data, sortColumn, sortDirection))
      }

    />
  );
};


export default NewReactDataGridDemo;
