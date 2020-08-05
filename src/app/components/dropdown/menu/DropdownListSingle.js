import PropTypes from 'prop-types';
import {useSelectIndex} from 'app/hooks/useSelectIndex';
import {DropdownOption} from 'app/components/dropdown/options/DropdownOption';
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
}) => {
  const handleTriggerSelect = React.useCallback((index) => {
    const option = options[index];

    if (!option) return;

    onChange(null, option.value);
  }, [options]);

  const {selectIndex} = useSelectIndex({
    maxIndex: options.length - 1,
    triggerSelect: handleTriggerSelect,
  });

  return (
    <div className="ui-select__list ui-scrollbar">
      {options.map((option, index) => (
        <div
          key={option.value}
          className={cn('ui-select__item', {
            'ui-select__item--selected': getIsSelected(value, option.value),
            'ui-select__item--active': selectIndex === index,
          })}
          onClick={event => onChange(event, option.value)}
        >
          <DropdownOption option={option} />
        </div>
      ))}
    </div>
  );
};

DropdownListSingle.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(DropdownItemPropTypes).isRequired,
  value: DropdownValuePropTypes.isRequired,
};
