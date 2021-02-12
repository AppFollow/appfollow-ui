import {useContext} from 'react';
import {DropdownLayoutContext} from 'app/helpers/dropdownLayoutContext';
import {getIsEmptyArray} from 'app/helpers/common';

export const DropdownLabel = ({
  valueOption,
  multi,
  name,
  onClick,
  isOpen,
  onClickMultiLabel,
  multiLeftText,
}) => {
  const {EmptyLabel, SingleLabel, MultiLabel} = useContext(DropdownLayoutContext);
  const isEmpty = multi ? getIsEmptyArray(valueOption) : !valueOption;

  return (
    <div className="ui-select__value" onClick={onClick}>
      {isEmpty ? <EmptyLabel name={name} /> : null}

      {!isEmpty && !multi ? (
        <SingleLabel
          selectedOption={valueOption}
        />
      ) : null}

      {!isEmpty && multi ? (
        <MultiLabel
          selectedOptions={valueOption}
          multiLeftText={typeof multiLeftText === 'string' ? multiLeftText : name}
          isOpen={isOpen}
          onClickMultiLabel={onClickMultiLabel}
        />
      ) : null}

      <i className="icon dropdown ui-select__arrow-icon" />
    </div>
  );
};

DropdownLabel.defaultProps = {
  valueOption: null,
  onClickMultiLabel: undefined,
  multiLeftText: undefined,
};
