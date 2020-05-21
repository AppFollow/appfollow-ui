import PropTypes from 'prop-types';

export const DropdownEmptyLabel = ({name}) => (
  <span className="ui-select__value-placeholder">
    {name}
  </span>
);

DropdownEmptyLabel.propTypes = {
  name: PropTypes.string.isRequired,
};
