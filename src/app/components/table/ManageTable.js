import PropTypes from 'prop-types';
import {ColumnItemTablePropTypes} from 'app/constants/tableConstant';
import {Dropdown} from 'app/components/Dropdown';

export const ManageTable = ({
  columns,
  viewColumns,
  onChangeViewColumns,
}) => {
  const options = React.useMemo(
    () => columns
      .filter(item => !item.isNoManaged)
      .map(item => ({
        value: item.id,
        text: item.manageName || item.content,
      })),
    [columns],
  );

  const handleChange = React.useCallback(
    (event, newViewColums) => onChangeViewColumns(newViewColums),
    [onChangeViewColumns],
  );

  const customLabel = React.useMemo(
    () => (
      <div className="ui-select__value">
        <span className="ui-select__value-placeholder">
          Manage Table
        </span>
        <i className="icon dropdown ui-select__arrow-icon" />
      </div>
    ),
    [],
  );

  return (
    <Dropdown
      multi
      value={viewColumns}
      options={options}
      onChange={handleChange}
      className="ui-select--dropdown ui-sheet__manage-table"
      customLabel={customLabel}
    />
  );
};

ManageTable.propTypes = {
  columns: PropTypes.arrayOf(ColumnItemTablePropTypes).isRequired,
  viewColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeViewColumns: PropTypes.func.isRequired,
};
