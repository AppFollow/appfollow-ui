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
      {
        [`ui-placeholder-text--${type}`]: type !== 'text',
      },
      className,
    )}
    style={{width}}
  />
);

TextPlaceholderComponent.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export const TextPlaceholder = React.memo(TextPlaceholderComponent);
