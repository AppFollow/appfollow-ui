import PropTypes from 'prop-types';
import {
  RowTablePropTypes,
  ColumnItemTablePropTypes,
} from 'app/constants/tableConstant';
import {RowTable} from 'app/components/table/RowTable';

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

BodyTable.propTypes = {
  data: PropTypes.arrayOf(RowTablePropTypes).isRequired,
  columns: PropTypes.arrayOf(ColumnItemTablePropTypes).isRequired,
  countFixedColumn: PropTypes.number.isRequired,
  widthPlaceholder: PropTypes.number.isRequired,
};
