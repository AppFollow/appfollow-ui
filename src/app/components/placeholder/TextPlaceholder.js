import PropTypes from 'prop-types';

/**
 * Компонент заглушки текста
 */
const TextPlaceholderComponent = ({
  type,
  className,
  width,
}) => (
  <div
    className={cn(
      'ui-placeholder',
      'ui-placeholder-text',
      `ui-placeholder-text--${type}`,
      className,
    )}
    style={{width}}
  />
);

TextPlaceholderComponent.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'h2',
    'h5',
    'kpi',
    'text',
  ]).isRequired,
  width: PropTypes.string.isRequired,
};

export const TextPlaceholder = React.memo(TextPlaceholderComponent);
