import PropTypes from 'prop-types';

export const LabelManageTable = ({onClick}) => (
  <div className="ui-select__value" onClick={onClick}>
    <span className="ui-select__value-placeholder">
      Manage Table
    </span>
    <i className="icon dropdown ui-select__arrow-icon" />
  </div>
);

LabelManageTable.propTypes = {
  onClick: PropTypes.func.isRequired,
};
