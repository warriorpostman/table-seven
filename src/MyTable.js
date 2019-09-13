import React from 'react';
import { 
  useTable, 
  useSortBy, 
  usePagination 
} from 'react-table';
import './MyTable.css'

function Table({ columns, data }) {

  const { 
    getTableProps, 
    headerGroups, 
    rows, 
    prepareRow,
    page,

		// The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
		state: [{ pageIndex, pageSize }]
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
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
        {page.map((row, i) =>
        prepareRow(row) || (
        <tr {...row.getRowProps()}>
          {row.cells.map(cell => <td>{cell.render('Cell')}</td>)}
        </tr>
        )
        )}
      </tbody>
    </table>
		<div className="pagination">
			<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
				{'<<'}
			</button>{' '}
			<button onClick={() => previousPage()} disabled={!canPreviousPage}>
				{'<'}
			</button>{' '}
			<button onClick={() => nextPage()} disabled={!canNextPage}>
				{'>'}
			</button>{' '}
			<button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
				{'>>'}
			</button>{' '}
			<span>
				Page{' '}
				<strong>
					{pageIndex + 1} of {pageOptions.length}
				</strong>{' '}
			</span>
{ false &&
			<span>
				| Go to page:{' '}
				<input
					type="number"
					defaultValue={pageIndex + 1}
					onChange={e => {
						const page = e.target.value ? Number(e.target.value) - 1 : 0
						gotoPage(page)
					}}
					style={{ width: '100px' }}
				/>
			</span>}
{false &&  <select
				value={pageSize}
				onChange={e => {
					setPageSize(Number(e.target.value))
				}}
			>
				{[10, 20, 30, 40, 50].map(pageSize => (
					<option key={pageSize} value={pageSize}>
						Show {pageSize}
					</option>
				))}
			</select>
}
		</div> 
		</div>
 
  );
};

export default Table;
