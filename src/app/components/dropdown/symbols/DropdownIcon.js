import PropTypes from 'prop-types';

export const DropdownIcon = ({icon}) => (
  <i className={`icon ${icon} ui-select__icon ui-select__symbol`} />
);

DropdownIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};
