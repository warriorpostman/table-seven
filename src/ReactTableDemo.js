import React from 'react';
import Table from './MyTable';
import Comparison from './Comparison';
import makeData from './makeData';
import simpleColumns, { nestedColumns } from './demoData';

const NewReactTableDemo = () => {
  // const memoizedColumns = React.useMemo(() => simpleColumns, []); 
  const memoizedColumns = React.useMemo(() => nestedColumns, []); 

  const data = React.useMemo(() => makeData(30), [])

  return (
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
      <Table columns={memoizedColumns} data={data} />
    </div>
  );
};

export default NewReactTableDemo;
