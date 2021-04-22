import React, {useContext} from 'react';
import cn from 'classnames';

import {DropdownLayoutContext} from '../../../helpers/dropdownLayoutContext';

export const DropdownListMulti = ({
  options,
  onChange,
  selectIndex,
  onMouseEnter,
  selectedValue,
  onApply,
}) => {
  const {Option, ApplyButton} = useContext(DropdownLayoutContext);

  return (
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
              <Option
                option={option}
                onMouseEnter={onMouseEnter}
                index={index}
              />

              {isMultiSelected ? <i className="icon close ui-select__label-remove" /> : null}
            </div>
          );
        })}
      </div>
      <ApplyButton onApply={onApply} />
    </React.Fragment>
  );
};

DropdownListMulti.defaultProps = {
  selectIndex: null,
  onMouseEnter: null,
  selectedValue: null,
  onApply: null,
};
