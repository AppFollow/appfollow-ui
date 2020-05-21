import PropTypes from 'prop-types';

export const DropdownColor = ({color}) => (
  <span className="ui-select__color ui-select__symbol" style={{backgroundColor: color}} />
);

DropdownColor.propTypes = {
  color: PropTypes.string.isRequired,
};
