import React from 'react';
import cn from 'classnames';

import {getStyleForCellTable} from '../../helpers/tableHelper';

export const NumberTable = ({
  type,
  children,
  className,
  width,
}) => (
  <span
    className={cn('ui-sheet__number ui-sheet__text', className, {
      [`ui-sheet__text--${type}`]: type,
    })}
    style={getStyleForCellTable(width)}
  >
    {children}
  </span>
);

NumberTable.defaultProps = {
  type: '',
  className: '',
  width: null,
};
