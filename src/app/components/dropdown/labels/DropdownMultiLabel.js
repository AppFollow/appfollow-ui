import PropTypes from 'prop-types';
import {DropdownSymbols} from 'app/components/dropdown/DropdownSymbols';
import {DropdownItemPropTypes} from 'app/constants/dropdownConstant';

export const DropdownMultiLabel = ({name, options}) => (
  <React.Fragment>
    <span className="ui-select__value-text">
      {name}:
    </span>
    {options.map((option, index) => (
      <span
        key={option.value}
        className={cn('ui-select__label ui-select__value-label', {
          'ui-select__value-label--first': !index,
          'ui-select__value-label--last': index === options.length - 1,
        })}
      >
        <DropdownSymbols option={option} />
        <span className="ui-select__label-text">
          {option.text}
        </span>
      </span>
    ))}
  </React.Fragment>
);

DropdownMultiLabel.propTypes = {
  options: PropTypes.arrayOf(DropdownItemPropTypes).isRequired,
  name: PropTypes.string.isRequired,
};
