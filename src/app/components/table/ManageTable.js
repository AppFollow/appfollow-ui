import React from 'react';

import {Dropdown} from '../Dropdown';
import {LabelManageTable} from './LabelManageTable';

const layouts = {
  Label: LabelManageTable,
};

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

  return (
    <Dropdown
      multi
      value={viewColumns}
      options={options}
      onChange={handleChange}
      className="ui-sheet__manage-table"
      layouts={layouts}
    />
  );
};
