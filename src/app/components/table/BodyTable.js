import React from 'react';

import {RowTable} from './RowTable';

export const BodyTable = ({
  data,
  columns,
  countFixedColumn,
  widthPlaceholder,
}) => (
  <tbody className="ui-sheet__table-tbody">
    {data.map((row, indexRow) => (
      <RowTable
        key={row.key || `row--${indexRow}`}
        row={row}
        columns={columns}
        countFixedColumn={countFixedColumn}
        widthPlaceholder={widthPlaceholder}
      />
    ))}
  </tbody>
);
