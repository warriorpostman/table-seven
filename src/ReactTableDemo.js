import React from 'react';
import Table from './MyTable';
import makeData from './makeData';
import simpleColumns, { nestedColumns } from './demoData';

const NewReactTableDemo = () => {
  // const memoizedColumns = React.useMemo(() => simpleColumns, []); 
  const memoizedColumns = React.useMemo(() => nestedColumns, []); 

  const data = React.useMemo(() => makeData(30), [])
  return (
    <Table 
      columns={memoizedColumns} 
      data={data} 
    />
  );
};

export default NewReactTableDemo;
