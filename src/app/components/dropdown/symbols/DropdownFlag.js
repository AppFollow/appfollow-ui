import PropTypes from 'prop-types';

export const DropdownFlag = ({flag}) => (
  <i className={`flag ${flag} ui-select__symbol`} />
);

DropdownFlag.propTypes = {
  flag: PropTypes.string.isRequired,
};
