import PropTypes from 'prop-types';

export const DropdownRemove = ({onRemove, id}) => (
  <div className="ui-select__remove" onClick={onRemove} data-id={id}>
    <i className="icon remove ui-select__remove-icon" />
  </div>
);

DropdownRemove.propTypes = {
  onRemove: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
