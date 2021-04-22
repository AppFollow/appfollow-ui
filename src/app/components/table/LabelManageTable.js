import React from 'react';

export const LabelManageTable = ({onClick}) => (
  <div className="ui-select__value" onClick={onClick}>
    <span className="ui-select__value-placeholder">
      Manage Table
    </span>
    <i className="icon dropdown ui-select__arrow-icon" />
  </div>
);
