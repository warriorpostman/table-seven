import React from 'react';
import Table from './MyTable';
import Comparison from './Comparison';
import makeData from './makeData';

const NewReactTableDemo = () => {
  const simpleColumns = React.useMemo(() => [
            {
              Header: 'First Name',
              accessor: 'firstName',
            },
            {
              Header: 'Last Name',
              accessor: 'lastName',
            },
            {
              Header: 'Age',
              accessor: 'age',
            },
            {
              Header: 'Visits',
              accessor: 'visits',
            },
            {
              Header: 'Status',
              accessor: 'status',
            },
            {
              Header: 'Profile Progress',
              accessor: 'progress',
            },
      ],
      []
  ); 
  const nestedColumns = React.useMemo(() => [
        {
          Header: 'Name',
          columns: [
            {
              Header: 'First Name',
              accessor: 'firstName',
            },
            {
              Header: 'Last Name',
              accessor: 'lastName',
            },
          ],
        },
        {
          Header: 'Info',
          columns: [
            {
              Header: 'Age',
              accessor: 'age',
            },
            {
              Header: 'Visits',
              accessor: 'visits',
            },
            {
              Header: 'Status',
              accessor: 'status',
            },
            {
              Header: 'Profile Progress',
              accessor: 'progress',
            },
          ],
        },
      ],
      []
    ); 

  const data = React.useMemo(() => makeData(30), [])
  console.log(data);

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
      <Table columns={simpleColumns} data={data} />
    </div>
  );
};

export default NewReactTableDemo;
