import PropTypes from 'prop-types';
import {
  CellTablePropTypes,
  ColumnItemTablePropTypes,
} from 'app/constants/tableConstant';
import {getStyleForCellTable} from 'app/helpers/tableHelper';

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

CellTable.propTypes = {
  cell: CellTablePropTypes.isRequired,
  column: ColumnItemTablePropTypes,
  isFixed: PropTypes.bool,
  leftFixed: PropTypes.number,
};

CellTable.defaultProps = {
  isFixed: false,
  column: {},
  leftFixed: 0,
};
