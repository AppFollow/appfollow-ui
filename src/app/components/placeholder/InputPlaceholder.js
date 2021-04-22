import React from 'react';
import cn from 'classnames';

import {TextPlaceholder} from './TextPlaceholder';

/**
 * Компонент заглушки инпута
 */
const InputPlaceholderComponent = ({
  className,
  iconDropdown,
  width,
}) => (
  <div
    className={cn('ui-placeholder ui-placeholder-input', className)}
    style={{width}}
  >
    <TextPlaceholder />
    {iconDropdown ? <i className={`icon ${iconDropdown}`} /> : null}
  </div>
);

export const InputPlaceholder = React.memo(InputPlaceholderComponent);
