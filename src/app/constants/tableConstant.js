import PropTypes from 'prop-types';

export const SortTablePropTypes = PropTypes.shape({
  direction: PropTypes.oneOf(['asc', 'desc']),
  columnId: PropTypes.string,
});

export const ColumnItemTablePropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  isNoManaged: PropTypes.bool,
  manageName: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sortable: PropTypes.bool,
  firstSortDirection: PropTypes.oneOf('asc', 'desc'),
  className: PropTypes.string,
  cellProps: PropTypes.objectOf(PropTypes.any),
});

export const CellTablePropTypes = PropTypes.shape({
  key: PropTypes.string,
  node: PropTypes.node.isRequired,
  className: PropTypes.string,
  cellProps: PropTypes.objectOf(PropTypes.any),
});

export const RowTablePropTypes = PropTypes.shape({
  key: PropTypes.string,
  type: PropTypes.oneOf(['bold']),
  cells: PropTypes.arrayOf(CellTablePropTypes).isRequired,
});
