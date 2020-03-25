import PropTypes from 'prop-types';
import {InputPlaceholder} from 'app/components/placeholder/InputPlaceholder';
import {TextPlaceholder} from 'app/components/placeholder/TextPlaceholder';
import {CheckboxPlaceholder} from 'app/components/placeholder/CheckboxPlaceholder';

const textTypes = ['text', 'h2', 'h4', 'desc', 'info'];
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

  if (type === 'input') {
    return (
      <InputPlaceholder
        className={resultClassName}
        width={width}
        iconDropdown={iconDropdown}
      />
    );
  }

  if (textTypes.includes(type)) {
    return (
      <TextPlaceholder
        className={resultClassName}
        width={width}
        type={type}
      />
    );
  }

  if (type === 'checkbox') {
    return (
      <CheckboxPlaceholder
        className={resultClassName}
        width={width}
      />
    );
  }

  return null;
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
    'text',
    'h2',
    'h4',
    'desc',
    'info',
    'input',
    'checkbox',
  ]),
  /**
   * Элемент имеет анимацию
   */
  isAnimate: PropTypes.bool,
  /**
   * Ширина (10px, 10%)
   */
  width: PropTypes.string,
  /**
   * Иконка для инпута
   */
  iconDropdown: PropTypes.string,
};

PlaceholderComponent.defaultProps = {
  className: '',
  type: 'text',
  isAnimate: false,
  width: '',
  iconDropdown: 'caret down',
};

export const Placeholder = React.memo(PlaceholderComponent);
