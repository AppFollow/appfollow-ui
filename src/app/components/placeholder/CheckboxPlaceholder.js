import PropTypes from 'prop-types';

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

CheckboxPlaceholderComponent.propTypes = {
  className: PropTypes.string.isRequired,
};

export const CheckboxPlaceholder = React.memo(CheckboxPlaceholderComponent);
