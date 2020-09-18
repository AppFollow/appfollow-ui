import PropTypes from 'prop-types';
import {useContext} from 'react';
import {DropdownLayoutContext} from 'app/helpers/dropdownLayoutContext';
import {DropdownItemPropTypes} from 'app/constants/dropdownConstant';

export const DropdownMultiLabel = ({
  multiLeftText,
  selectedOptions,
  isOpen,
  onClickMultiLabel,
}) => {
  const {Symbols} = useContext(DropdownLayoutContext);

  return (
    <React.Fragment>
      <span className="ui-select__value-text">
        {multiLeftText}:
      </span>
      {selectedOptions.map((option, index) => (
        <span
          key={option.value}
          className={cn('ui-select__label ui-select__value-label', {
            'ui-select__value-label--first': !index,
            'ui-select__value-label--last': index === selectedOptions.length - 1,
            'ui-select__value-label--edit-mode': isOpen,
          })}
          onClick={isOpen ? (event) => onClickMultiLabel(event, option) : null}
        >
          <Symbols option={option} />
          <span className="ui-select__label-text">
            {option.text}
          </span>
          {isOpen ? (
            <i className="icon close ui-select__label-remove" />
          ) : null}
        </span>
      ))}
    </React.Fragment>
  );
};

DropdownMultiLabel.propTypes = {
  selectedOptions: PropTypes.arrayOf(DropdownItemPropTypes).isRequired,
  multiLeftText: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClickMultiLabel: PropTypes.func,
};

DropdownMultiLabel.defaultProps = {
  isOpen: false,
  onClickMultiLabel: () => {},
};
