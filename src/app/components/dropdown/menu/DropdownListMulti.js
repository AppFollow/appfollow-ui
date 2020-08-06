import PropTypes from 'prop-types';
import {DropdownOption} from 'app/components/dropdown/options/DropdownOption';
import {
  DropdownItemPropTypes,
  DropdownValuePropTypes,
} from 'app/constants/dropdownConstant';

export const DropdownListMulti = ({
  options,
  onChange,
  selectIndex,
  onMouseEnter,
  selectedValue,
  onApply,
}) => (
  <React.Fragment>
    <div className="ui-select__list ui-scrollbar">
      {options.map((option, index) => {
        const isMultiSelected = Array.isArray(selectedValue)
          && selectedValue.includes(option.value);

        return (
          <div
            key={option.value}
            className={cn('ui-select__item ui-select__item--control ui-select__item--multi', {
              'ui-select__item--selected': isMultiSelected,
              'ui-select__item--active': index === selectIndex,
            })}
            onClick={event => onChange(event, option.value)}
          >
            <DropdownOption
              option={option}
              onMouseEnter={onMouseEnter}
              index={index}
            />

            {isMultiSelected ? <i className="icon close ui-select__label-remove" /> : null}
          </div>
        );
      })}
    </div>
    <div className="ui-select__apply" onClick={onApply}>
      Apply
    </div>
  </React.Fragment>
);

DropdownListMulti.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(DropdownItemPropTypes).isRequired,
  selectIndex: PropTypes.number,
  onMouseEnter: PropTypes.func,
  selectedValue: DropdownValuePropTypes,
  onApply: PropTypes.func,
};

DropdownListMulti.defaultProps = {
  selectIndex: null,
  onMouseEnter: null,
  selectedValue: null,
  onApply: null,
};
