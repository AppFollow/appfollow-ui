import {useContext} from 'react';
import {DropdownLayoutContext} from 'app/helpers/dropdownLayoutContext';

export const DropdownSingleLabel = ({selectedOption}) => {
  const {Symbols} = useContext(DropdownLayoutContext);

  return (
    <span className="ui-select__value-text">
      <Symbols option={selectedOption} />

      <span className="ui-select__value-single">
        {selectedOption.text}
      </span>
    </span>
  );
};
