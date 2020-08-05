import PropTypes from 'prop-types';

export const DropdownDotColor = ({color}) => (
  <span className="ui-select__dot ui-select__symbol" style={{backgroundColor: color}} />
);

DropdownDotColor.propTypes = {
  color: PropTypes.string.isRequired,
};
