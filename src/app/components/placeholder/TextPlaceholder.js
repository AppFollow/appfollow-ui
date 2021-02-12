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

export const TextPlaceholder = React.memo(TextPlaceholderComponent);
