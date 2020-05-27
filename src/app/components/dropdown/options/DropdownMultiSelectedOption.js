import {DropdownSymbols} from 'app/components/dropdown/DropdownSymbols';
import {DropdownItemPropTypes} from 'app/constants/dropdownConstant';

export const DropdownMultiSelectedOption = ({option}) => (
  <span className="ui-select__label">
    <DropdownSymbols option={option} />
    <span className="ui-select__label-text">
      {option.text}
    </span>
    <i className="icon close ui-select__label-remove" />
  </span>
);

DropdownMultiSelectedOption.propTypes = {
  option: DropdownItemPropTypes.isRequired,
};
