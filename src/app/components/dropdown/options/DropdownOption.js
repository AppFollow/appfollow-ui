import {DropdownSymbols} from 'app/components/dropdown/DropdownSymbols';
import {DropdownItemPropTypes} from 'app/constants/dropdownConstant';

export const DropdownOption = ({option}) => (
  <React.Fragment>
    <DropdownSymbols option={option} />
    <span className="ui-select__item-text">
      {option.text}
    </span>
  </React.Fragment>
);

DropdownOption.propTypes = {
  option: DropdownItemPropTypes.isRequired,
};
