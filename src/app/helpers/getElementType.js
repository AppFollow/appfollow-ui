export const getElementType = (Component, props, getDefault) => {
  const {defaultProps = {}} = Component;

  if (props.as) return props.as;

  if (getDefault) {
    return getDefault();
  }

  if (props.href) return 'a';

  return defaultProps.as || 'div';
};
