import './App.css';
import React from 'react';
import Table from './MyTable';
import makeData from './makeData';

function App() {
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
  const data = React.useMemo(() => makeData(15), [])
  console.log(data);

  return (
    <div className="App">
      <Table columns={simpleColumns} data={data} />
    </div>
  );
}

export default App;
