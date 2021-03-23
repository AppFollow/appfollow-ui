import {getElementType} from 'app/helpers/getElementType';
import {useCallback} from 'react';

/**
 * Компонент кнопки
 *
 * @author [Alec Zvoncov](https://github.com/offcall)
 */
const ButtonComponent = props => {
  const {
    content,
    children,
    className,
    inverted,
    type,
    buttonType,
    color,
    size,
    disabled,
    loading,
    basic,
    icon,
    onClick,
    ...otherProps
  } = props;
  const ElementType = getElementType(Button, props);

  const colorClassName = type === 'custom' ? color : type;
  const resultClassName = cn(
    'ui-button',
    `ui-button--${colorClassName}`,
    className,
    {
      [`ui-button--${size}`]: size && size !== ButtonComponent.defaultProps.size,
      'ui-button--disabled': disabled,
      'ui-button--loading': loading,
      'ui-button--basic': basic,
      'ui-button--inverted': inverted,
    },
  );
  // eslint-disable-next-line no-unused-vars
  const {as, ...renderProps} = otherProps;

  if (ElementType === 'button') {
    renderProps.type = buttonType;
  }

  const handleClick = useCallback(event => {
    if (disabled) {
      event.preventDefault();

      return;
    }

    if (onClick) {
      onClick(event);
    }
  }, [onClick, disabled]);

  return (
    <ElementType
      className={resultClassName}
      {...renderProps}
      onClick={handleClick}
    >
      {icon ? <i className={`icon ${icon}`} /> : null}
      {content || children}
    </ElementType>
  );
};

ButtonComponent.displayName = 'Button';

ButtonComponent.defaultProps = {
  as: 'button',
  className: '',
  children: null,
  content: null,
  inverted: false,
  type: 'default',
  buttonType: 'button',
  size: 'normal',
  color: '',
  disabled: false,
  loading: false,
  basic: false,
  icon: '',
  onClick: null,
};

export const Button = React.memo(ButtonComponent);
