import PropTypes from 'prop-types';
import {HeaderCellTable} from 'app/components/table/HeaderCellTable';
import {
  ColumnItemTablePropTypes,
  SortDirectionPropTypes,
} from 'app/constants/tableConstant';
import {getStyleForCellTable} from 'app/helpers/tableHelper';

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

HeaderTable.propTypes = {
  columns: PropTypes.arrayOf(ColumnItemTablePropTypes).isRequired,
  sortDirection: SortDirectionPropTypes.isRequired,
  sortColumnId: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  countFixedColumn: PropTypes.number.isRequired,
  widthPlaceholder: PropTypes.number.isRequired,
};