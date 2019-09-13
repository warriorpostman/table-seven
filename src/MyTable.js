import React from 'react';
import { useTable, useSortBy } from 'react-table';
import './MyTable.css'

function Table({ columns, data }) {

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  return (
    <div>
      <table 
        classname="my-table"
        {...getTableProps()}>
        <thead>
           {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : '-x'}
                </span>
              </th>
              
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row, i) =>
          prepareRow(row) || (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => <td>{cell.render('Cell')}</td>)}
          </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
