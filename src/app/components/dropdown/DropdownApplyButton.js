import PropTypes from 'prop-types';

export const DropdownApplyButton = ({onApply}) => (
  <div className="ui-select__apply" onClick={onApply}>
    Apply
  </div>
);

DropdownApplyButton.propTypes = {
  onApply: PropTypes.func.isRequired,
};
