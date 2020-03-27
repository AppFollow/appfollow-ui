import PropTypes from 'prop-types';
import {InputPlaceholder} from 'app/components/placeholder/InputPlaceholder';
import {TextPlaceholder} from 'app/components/placeholder/TextPlaceholder';
import {CheckboxPlaceholder} from 'app/components/placeholder/CheckboxPlaceholder';

const textTypes = ['h2', 'h5', 'kpi', 'text'];
/**
 * Компонент кнопки
 */
const PlaceholderComponent = ({
  isAnimate,
  className,
  width,
  type,
  iconDropdown,
}) => {
  const resultClassName = cn(
    {
      'ui-placeholder--active': isAnimate,
    },
    className,
  );

  const isText = textTypes.includes(type);

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

  const props = {
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

  return <Component {...props} />;
};

PlaceholderComponent.displayName = 'Placeholder';

PlaceholderComponent.propTypes = {
  /**
   * Класс
   */
  className: PropTypes.string,
  /**
   * Тип заглушки
   */
  type: PropTypes.oneOf([
    'h2',
    'h5',
    'kpi',
    'text',
    'input',
    'checkbox',
  ]),
  /**
   * Элемент имеет анимацию
   */
  isAnimate: PropTypes.bool,
  /**
   * Ширина (10, 10px, 10%)
   */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Иконка для инпута
   */
  iconDropdown: PropTypes.string,
};

PlaceholderComponent.defaultProps = {
  className: '',
  type: 'text',
  isAnimate: false,
  width: null,
  iconDropdown: 'caret down',
};

export const Placeholder = React.memo(PlaceholderComponent);
