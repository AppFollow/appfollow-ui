import PropTypes from 'prop-types';
import {DropdownSymbols} from 'app/components/dropdown/DropdownSymbols';
import {DropdownItemPropTypes} from 'app/constants/dropdownConstant';

export const DropdownOption = ({
  option,
  onMouseEnter,
  index,
}) => (
  <div
    onMouseEnter={(event) => onMouseEnter(event, option, index)}
    className="ui-select__item-content"
  >
    <DropdownSymbols option={option} />
    <span className="ui-select__item-text">
      {option.text}
    </span>
  </div>
);

DropdownOption.propTypes = {
  option: DropdownItemPropTypes.isRequired,
  onMouseEnter: PropTypes.func,
  index: PropTypes.number,
};

DropdownOption.defaultProps = {
  onMouseEnter: () => {},
  index: null,
};
