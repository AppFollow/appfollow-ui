import React from 'react';
import cn from 'classnames';

/**
 * Компонент заглушки чекбокса
 */
const CheckboxPlaceholderComponent = ({className}) => (
  <div
    className={cn(
      'ui-placeholder',
      'ui-placeholder-checkbox',
      className,
    )}
  />
);

export const CheckboxPlaceholder = React.memo(CheckboxPlaceholderComponent);
