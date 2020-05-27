import PropTypes from 'prop-types';

export const DropdownRemove = ({onRemove}) => (
  <div className="ui-select__remove" onClick={onRemove}>
    <i className="icon remove ui-select__remove-icon" />
  </div>
);

DropdownRemove.propTypes = {
  onRemove: PropTypes.func.isRequired,
};
