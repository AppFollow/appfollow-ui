import PropTypes from 'prop-types';

export const COUNT_OPTIONS_FOR_SEARCH = 6;

export const DropdownOneValuePropTypes = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]);

export const DropdownValuePropTypes = PropTypes.oneOfType([
  DropdownOneValuePropTypes,
  PropTypes.arrayOf(DropdownOneValuePropTypes),
]);

export const DropdownItemPropTypes = PropTypes.shape({
  value: DropdownOneValuePropTypes,
  text: PropTypes.string,
  flag: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  backgroundImageColor: PropTypes.string,
});
