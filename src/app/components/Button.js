import {getElementType} from 'app/helpers/getElementType';
import PropTypes from 'prop-types';
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
    renderProps.type = 'button';
  }

  const handleClick = useCallback(event => {
    if (disabled) {
      event.preventDefault();

      return;
    }

    if (onClick) {
      onClick(event);
    }
  }, []);

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
ButtonComponent.propTypes = {
  /**
   * Тип элемента при отображении (тег или компонент)
   */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
  ]),
  /**
   * Класс
   */
  className: PropTypes.string,
  /**
   * Содержание кнопки
   */
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  /**
   * Сокращенный вариант содержания кнопки
   */
  content: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  /**
   * Если кнопка на темном фоне
   */
  inverted: PropTypes.bool,
  /**
   * Тип кнопки
   *
   * One of: default, primary, secondary, custom
   */
  type: (props, propName, componentName) => {
    let error;

    const {color, type} = props;
    const isCustom = type === 'custom';

    // Если type === custom, a color не указан
    if (isCustom && !color) {
      error = new Error(`\`${componentName}\` color must be specified if type=custom.`);
    }

    const avaibleValues = ['default', 'primary', 'secondary', 'custom'];

    if (type && !avaibleValues.includes(type)) {
      // eslint-disable-next-line max-len
      error = new Error(`Invalid prop \`type\` of value \`${type}\` supplied to \`${componentName}\`, expected one of ["${avaibleValues.join('", "')}"].`);
    }

    return error;
  },
  /**
   * Размер кнопки
   */
  size: PropTypes.oneOf(['normal', 'big']),
  /**
   * Цвет кнопки
   *
   * One of: reg, green
   */
  color: (props, propName, componentName) => {
    let error;

    const isCustom = props.type === 'custom';
    const {color} = props;

    // Если указан color, но type !== custom
    if (!isCustom && color) {
      error = new Error(`\`${componentName}\` color can be used if type=custom.`);
    }

    const avaibleValues = ['red', 'green'];

    if (color && !avaibleValues.includes(color)) {
      // eslint-disable-next-line max-len
      error = new Error(`Invalid prop \`color\` of value \`${color}\` supplied to \`${componentName}\`, expected one of ["${avaibleValues.join('", "')}"].`);
    }

    return error;
  },
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
  /**
  * Иконка (на странице стайлбука - стили не подгружены)
  */
  icon: PropTypes.string,
  /**
  * Клик по кнопке
  */
  onClick: PropTypes.func,
};

ButtonComponent.defaultProps = {
  as: 'button',
  className: '',
  children: null,
  content: null,
  inverted: false,
  type: 'default',
  size: 'normal',
  color: '',
  disabled: false,
  loading: false,
  basic: false,
  icon: '',
  onClick: null,
};

export const Button = React.memo(ButtonComponent);
