import {RowTablePropTypes} from 'app/constants/tableConstant';
import {CellTable} from 'app/components/table/CellTable';

export const RowTable = ({row}) => (
  <tr
    className={cn('ui-sheet__table-tr', {
      [`ui-sheet__table-tr--${row.type}`]: row.type,
    })}
  >
    {row.cells.map((cell, indexCell) => (
      <CellTable
        key={cell.key || `cell--${indexCell}`}
        cell={cell}
      />
    ))}
  </tr>
);

RowTable.propTypes = {
  row: RowTablePropTypes.isRequired,
};
