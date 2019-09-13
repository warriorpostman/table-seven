const simpleColumns = [
  {
    Header: 'First Name',
    accessor: 'firstName',
    sortType: 'basic'
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
    sortType: 'basic'
  },
  {
    Header: 'Age',
    accessor: 'age',
    sortType: 'basic'
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
];

export const nestedColumns = [
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
];

export default simpleColumns;
