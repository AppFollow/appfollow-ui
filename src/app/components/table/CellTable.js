import {CellTablePropTypes} from 'app/constants/tableConstant';

export const CellTable = ({cell}) => (
  <td
    className="ui-sheet__table-td"
  >
    {cell.node}
  </td>
);

CellTable.propTypes = {
  cell: CellTablePropTypes.isRequired,
};
