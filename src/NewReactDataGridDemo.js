import React from 'react';
import ReactDataGrid from 'react-data-grid';
import Comparison from './Comparison';

// import 'bootstrap/dist/css/bootstrap.css';

import makeData from './makeData';

import simpleColumns from './demoData';

const NewReactDataGridDemo = () => {
  const data = React.useMemo(() => makeData(30), []);
  // Need to add a 'key' property to each row when using react-data-grid
  const reactDataGridColumns = simpleColumns
    .map(c => ({ ...c, key: c.accessor}));

  return (
    <div>
      <Comparison
        pros={[
        "Has Excel like properties",
        ]}
        cons={[
        "Uses divs for rows/cells",
        "Requires bootstrap"
        ]}
      />
      <ReactDataGrid 
        columns={reactDataGridColumns}
        rowsCount={data.length}
        rowGetter={i => data[i]}
      />
    </div>
  );
};


export default NewReactDataGridDemo;
