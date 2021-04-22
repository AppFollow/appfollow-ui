import React from 'react';
import cn from 'classnames';

import {getStyleForCellTable} from '../../helpers/tableHelper';

export const HeaderCellTable = ({
  data,
  sortDirection,
  sortColumnId,
  onSort,
  isFixed,
  leftFixed,
}) => (
  <th
    className={cn('ui-sheet__table-th', data.className, {
      'ui-sheet__table-th--fixed': isFixed,
    })}
    style={{
      ...getStyleForCellTable(data.width),
      left: leftFixed ? `${leftFixed}px` : undefined,
    }}
    {...data.cellProps}
  >
    <span
      className={cn('ui-sheet__table-th-text', {
        'ui-sheet__table-th-text--sortable': data.sortable,
      })}
      onClick={data.sortable ? onSort : null}
      data-id={data.id}
    >
      {data.content}

      {data.sortable ? (
        <i
          className={cn('icon ui-sheet__sort-icon', {
            'sort': sortColumnId !== data.id,
            'sort down': sortColumnId === data.id && sortDirection === 'desc',
            'sort up': sortColumnId === data.id && sortDirection === 'asc',
          })}
        />
      ) : null}
    </span>
  </th>
);

HeaderCellTable.defaultProps = {
  isFixed: false,
  leftFixed: 0,
};
