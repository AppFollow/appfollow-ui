import PropTypes from 'prop-types';
import {RowTablePropTypes} from 'app/constants/tableConstant';
import {RowTable} from 'app/components/table/RowTable';

export const BodyTable = ({data}) => (
  <tbody className="ui-sheet__table-tbody">
    {data.map((row, indexRow) => (
      <RowTable
        key={row.key || `row--${indexRow}`}
        row={row}
      />
    ))}
  </tbody>
);

BodyTable.propTypes = {
  data: PropTypes.arrayOf(RowTablePropTypes).isRequired,
};
