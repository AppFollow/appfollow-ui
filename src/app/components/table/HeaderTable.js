import PropTypes from 'prop-types';
import {HeaderCellTable} from 'app/components/table/HeaderCellTable';
import {
  ColumnItemTablePropTypes,
  SortTablePropTypes,
} from 'app/constants/tableConstant';

export const HeaderTable = ({
  columns,
  sort,
  onSort,
}) => (
  <thead className="ui-sheet__table-thead">
    {columns.map(col => (
      <HeaderCellTable
        key={col.id}
        data={col}
        sort={sort}
        onSort={onSort}
      />
    ))}
  </thead>
);

HeaderTable.propTypes = {
  columns: PropTypes.arrayOf(ColumnItemTablePropTypes).isRequired,
  sort: SortTablePropTypes.isRequired,
  onSort: PropTypes.func.isRequired,
};
