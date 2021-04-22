import React, {useContext} from 'react';
import cn from 'classnames';
import {DropdownLayoutContext} from '../../../helpers/dropdownLayoutContext';

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

DropdownMultiLabel.defaultProps = {
  isOpen: false,
  onClickMultiLabel: () => {},
};
