import React from 'react';
import ReactDataGrid from 'react-data-grid';

import makeData from './makeData';

import simpleColumns from './demoData';

const NewReactDataGridDemo = () => {
  const data = React.useMemo(() => makeData(30), []);
  // Need to add a 'key' property to each row when using react-data-grid
  const reactDataGridColumns = simpleColumns
    .map(c => ({ ...c, key: c.accessor}));

  return (
    <ReactDataGrid 
      columns={reactDataGridColumns}
      rowsCount={data.length}
      rowGetter={i => data[i]}
    />
  );
};


export default NewReactDataGridDemo;
