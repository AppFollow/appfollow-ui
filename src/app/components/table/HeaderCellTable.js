import PropTypes from 'prop-types';
import {
  ColumnItemTablePropTypes,
  SortTablePropTypes,
} from 'app/constants/tableConstant';
import {
  getStyleForCellTable,
} from 'app/helpers/tableHelper';

export const HeaderCellTable = ({
  data,
  sort,
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
            'sort': sort.columnId !== data.id,
            'sort down': sort.columnId === data.id && sort.direction === 'desc',
            'sort up': sort.columnId === data.id && sort.direction === 'asc',
          })}
        />
      ) : null}
    </span>
  </th>
);

HeaderCellTable.propTypes = {
  data: ColumnItemTablePropTypes.isRequired,
  sort: SortTablePropTypes.isRequired,
  onSort: PropTypes.func.isRequired,
  isFixed: PropTypes.bool,
  leftFixed: PropTypes.number,
};

HeaderCellTable.defaultProps = {
  isFixed: false,
  leftFixed: 0,
};
