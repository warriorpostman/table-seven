import React from 'react';
import { useTable } from 'react-table';
import './MyTable.css'

function Table({ columns, data }) {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  })

  return (
    <div>
    <table 
			classname="my-table"
			{...getTableProps()}>
      <thead>
				 {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
  )
};

export default Table;
