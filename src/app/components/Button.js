import {getElementType} from 'app/helpers/getElementType';
import PropTypes from 'prop-types';

/**
 * Компонент кнопки
 *
 * @author [Alec Zvoncov](https://github.com/offcall)
 */
export const Button = props => {
  const {
    content,
    children,
    type,
    size,
    disabled,
    loading,
    basic,
    ...otherProps
  } = props;
  const ElementType = getElementType(Button, props);
  const className = cx(
    'ui-button',
    {
      [`ui-button--${type}`]: type && type !== Button.defaultProps.type,
      [`ui-button--${size}`]: size && size !== Button.defaultProps.size,
      'ui-button--disabled': disabled,
      'ui-button--loading': loading,
      'ui-button--basic': basic,
    },
    otherProps.className,
  );
  const renderProps = _.omit(otherProps, 'as');

  if (ElementType === 'button') {
    renderProps.type = 'button';
  }

  return (
    <ElementType
      className={className}
      {...renderProps}
    >
      {content || children}
    </ElementType>
  );
};

Button.propTypes = {
  /**
   * Тип элемента для отображение
   */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /**
   * Тип кнопки
   */
  type: PropTypes.oneOf([
    'regular',
    'action',
    'service',
    'subscriptionPositive',
    'subscriptionNegative',
  ]),
  /**
   * Размер кнопки
   */
  size: PropTypes.oneOf(['regular', 'big']),
  /**
   * Если нужно установить индикатор загрузки
   */
  loading: PropTypes.bool,
  /**
   * Если с кнопкой невозможно взаимодействовать
   */
  disabled: PropTypes.bool,
  /**
  * Если кнопка без заливки
  */
  basic: PropTypes.bool,
};

Button.defaultProps = {
  as: 'button',
  type: 'regular',
  size: 'regular',
  disabled: false,
  loading: false,
  basic: false,
};
