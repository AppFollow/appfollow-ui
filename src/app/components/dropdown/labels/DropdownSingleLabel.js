import {DropdownSymbols} from 'app/components/dropdown/DropdownSymbols';
import {DropdownItemPropTypes} from 'app/constants/dropdownConstant';

export const DropdownSingleLabel = ({option}) => (
  <span className="ui-select__value-text">
    <DropdownSymbols option={option} />
    <span className="ui-select__value-single">
      {option.text}
    </span>
  </span>
);

DropdownSingleLabel.propTypes = {
  option: DropdownItemPropTypes.isRequired,
};
