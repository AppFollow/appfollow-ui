import PropTypes from 'prop-types';
import {DropdownOption} from 'app/components/dropdown/options/DropdownOption';
import {
  DropdownItemPropTypes,
  DropdownValuePropTypes,
} from 'app/constants/dropdownConstant';

export const DropdownListSingle = ({options, onChange, value}) => (
  <div className="ui-select__list ui-scrollbar">
    {options.map(option => (
      <div
        key={option.value}
        className={cn('ui-select__item', {
          'ui-select__item--selected': option.value === value,
        })}
        onClick={event => onChange(event, option.value)}
      >
        <DropdownOption option={option} />
      </div>
    ))}
  </div>
);

DropdownListSingle.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(DropdownItemPropTypes).isRequired,
  value: DropdownValuePropTypes.isRequired,
};
