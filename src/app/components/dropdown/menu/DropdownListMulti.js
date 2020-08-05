import PropTypes from 'prop-types';
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

  const handleApply = React.useCallback(
    (event) => onChange(event, resultValue),
    [resultValue, onChange],
  );

  // continue
  return (
    <React.Fragment>
      <div className="ui-select__list ui-scrollbar">
        {options.map((option) => {
          const isMultiSelected = Array.isArray(resultValue)
            && resultValue.includes(option.value);

          return (
            <div
              key={option.value}
              className={cn('ui-select__item ui-select__item--multi', {
                'ui-select__item--selected': isMultiSelected,
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
