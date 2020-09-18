import PropTypes from 'prop-types';
import {useContext} from 'react';
import {DropdownLayoutContext} from 'app/helpers/dropdownLayoutContext';
import {
  DropdownItemPropTypes,
  DropdownValuePropTypes,
} from 'app/constants/dropdownConstant';

const normalizeValue = (value) => {
  if (value === 'resetValue' || value === null || value === undefined) return '';

  return value;
};

const getIsSelected = (dropdownOption, optionValue) => normalizeValue(dropdownOption) === normalizeValue(optionValue);

export const DropdownListSingle = ({
  options,
  onChange,
  value,
  selectIndex,
  onMouseEnter,
}) => {
  const {Option} = useContext(DropdownLayoutContext);

  return (
    <div className="ui-select__list ui-scrollbar">
      {options.map((option, index) => (
        <div
          key={option.value}
          className={cn('ui-select__item ui-select__item--control', {
            'ui-select__item--selected': getIsSelected(value, option.value),
            'ui-select__item--active': selectIndex === index,
          })}
          onClick={event => onChange(event, option.value)}
        >
          <Option
            option={option}
            onMouseEnter={onMouseEnter}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

DropdownListSingle.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(DropdownItemPropTypes).isRequired,
  value: DropdownValuePropTypes.isRequired,
  selectIndex: PropTypes.number,
  onMouseEnter: PropTypes.func,
};

DropdownListSingle.defaultProps = {
  selectIndex: null,
  onMouseEnter: null,
};
