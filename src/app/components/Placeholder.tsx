import React from 'react';
import cn from 'classnames';

import {InputPlaceholder} from './placeholder/InputPlaceholder';
import {TextPlaceholder} from './placeholder/TextPlaceholder';
import {CheckboxPlaceholder} from './placeholder/CheckboxPlaceholder';

export type PlaceholderType = 'h2' | 'h5' | 'kpi' | 'text' | 'input' | 'checkbox';

export interface PlaceholderProps {
  isAnimate?: boolean;
  className?: string;
  width?: string | number;
  type?: PlaceholderType;
  iconDropdown?: string;
}

const textTypes: readonly PlaceholderType[] = ['h2', 'h5', 'kpi', 'text'];
/**
 * Компонент кнопки
 */
const PlaceholderComponent = ({
  isAnimate,
  className,
  width,
  type,
  iconDropdown,
}: PlaceholderProps) => {
  const resultClassName = cn(
    {
      'ui-placeholder--active': isAnimate,
    },
    className,
  );

  const isText = type !== undefined && textTypes.includes(type);

  let Component = null;

  if (type === 'input') {
    Component = InputPlaceholder;
  }

  if (isText) {
    Component = TextPlaceholder;
  }

  if (type === 'checkbox') {
    Component = CheckboxPlaceholder;
  }

  if (!Component) return null;

  const props: PlaceholderProps = {
    className: resultClassName,
    width: typeof width === 'number' && width
      ? `${width}px`
      : width,
  };

  if (type === 'input') {
    props.iconDropdown = iconDropdown;
  }

  if (isText) {
    props.type = type;
  }

  return <Component {...props as any} />;
};

PlaceholderComponent.displayName = 'Placeholder';

PlaceholderComponent.defaultProps = {
  className: '',
  type: 'text',
  isAnimate: false,
  width: null,
  iconDropdown: 'caret down',
};

export const Placeholder = React.memo<PlaceholderProps>(PlaceholderComponent as any);
