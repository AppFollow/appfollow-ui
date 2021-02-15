import {CellTable} from 'app/components/table/CellTable';
import {getStyleForCellTable} from 'app/helpers/tableHelper';

export const RowTable = ({
  row,
  columns,
  countFixedColumn,
  widthPlaceholder,
}) => {
  let leftFixed = 0;

  return (
    <tr
      className={cn('ui-sheet__table-tr', {
        [`ui-sheet__table-tr--${row.type}`]: row.type,
        'ui-sheet__table-tr--clickable': row.clickable,
      })}
      {...row.rowProps}
    >
      {countFixedColumn ? (
        <td
          className="ui-sheet__table-td ui-sheet__table-td--placeholder"
          style={getStyleForCellTable(`${widthPlaceholder}px`)}
        />
      ) : null}
      {row.cells.map((cell, indexCell) => {
        const isFixed = indexCell < countFixedColumn;

        if (isFixed && indexCell) {
          leftFixed += (columns[indexCell] || {}).width || 0;
        }

        return (
          <CellTable
            key={cell.key || `cell--${indexCell}`}
            cell={cell}
            isFixed={isFixed}
            column={columns[indexCell]}
            leftFixed={isFixed ? leftFixed : undefined}
          />
        );
      })}
    </tr>
  );
};
