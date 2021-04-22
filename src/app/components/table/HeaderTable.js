import React from 'react';

import {getStyleForCellTable} from '../../helpers/tableHelper';
import {HeaderCellTable} from './HeaderCellTable';

export const HeaderTable = ({
  columns,
  sortDirection,
  sortColumnId,
  onSort,
  countFixedColumn,
  widthPlaceholder,
}) => {
  let leftFixed = 0;

  return (
    <thead className="ui-sheet__table-thead">
      {countFixedColumn ? (
        <th
          className="ui-sheet__table-th ui-sheet__table-th--placeholder"
          style={getStyleForCellTable(`${widthPlaceholder}px`)}
        />
      ) : null}
      {columns.map((col, index) => {
        const isFixed = index < countFixedColumn;

        if (isFixed && index) {
          leftFixed += (columns[index] || {}).width || 0;
        }

        return (
          <HeaderCellTable
            key={col.id}
            data={col}
            sortDirection={sortDirection}
            sortColumnId={sortColumnId}
            onSort={onSort}
            isFixed={isFixed}
            leftFixed={leftFixed}
          />
        );
      })}
    </thead>
  );
};
