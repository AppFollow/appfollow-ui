import PropTypes from 'prop-types';
import {useSelectIndex} from 'app/hooks/useSelectIndex';
import {DropdownOption} from 'app/components/dropdown/options/DropdownOption';
import {
  DropdownItemPropTypes,
  DropdownValuePropTypes,
} from 'app/constants/dropdownConstant';

export const DropdownListMulti = ({
  options,
  onChange,
  value,
}) => {
  const [resultValue, setResultValue] = React.useState(value);

  const handleChange = (event, newValue) => {
    setResultValue(prev => prev.includes(newValue)
      ? prev.filter(item => item !== newValue)
      : [...prev, newValue]);
  };

  const handleTriggerSelect = React.useCallback((index) => {
    const option = options[index];

    if (!option) return;

    handleChange(null, option.value);
  }, [options, handleChange]);

  const {selectIndex} = useSelectIndex({
    maxIndex: options.length - 1,
    triggerSelect: handleTriggerSelect,
  });

  const handleApply = React.useCallback(
    (event) => onChange(event, resultValue),
    [resultValue, onChange],
  );

  return (
    <React.Fragment>
      <div className="ui-select__list ui-scrollbar">
        {options.map((option, index) => {
          const isMultiSelected = Array.isArray(resultValue)
            && resultValue.includes(option.value);

          return (
            <div
              key={option.value}
              className={cn('ui-select__item ui-select__item--multi', {
                'ui-select__item--selected': isMultiSelected,
                'ui-select__item--active': index === selectIndex,
              })}
              onClick={event => handleChange(event, option.value)}
            >
              <div className="ui-select__item-content">
                <DropdownOption option={option} />
              </div>

              {isMultiSelected ? <i className="icon close ui-select__label-remove" /> : null}
            </div>
          );
        })}
      </div>
      <div className="ui-select__apply" onClick={handleApply}>
        Apply
      </div>
    </React.Fragment>
  );
};

DropdownListMulti.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(DropdownItemPropTypes).isRequired,
  value: DropdownValuePropTypes.isRequired,
};
