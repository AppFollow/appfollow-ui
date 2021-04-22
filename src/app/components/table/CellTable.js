import React from 'react';
import cn from 'classnames';

import {getStyleForCellTable} from '../../helpers/tableHelper';

export const CellTable = ({
  cell,
  isFixed,
  column,
  leftFixed,
}) => (
  <td
    className={cn('ui-sheet__table-td', cell.className, {
      'ui-sheet__table-td--fixed': isFixed,
      [`ui-sheet__table-td--${cell.align}`]: cell.align,
    })}
    style={{
      ...getStyleForCellTable(column.width),
      left: leftFixed ? `${leftFixed}px` : undefined,
    }}
    {...cell.cellProps}
  >
    {cell.node}
  </td>
);

CellTable.defaultProps = {
  isFixed: false,
  column: {},
  leftFixed: 0,
};
