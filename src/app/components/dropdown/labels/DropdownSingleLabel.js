import {useContext} from 'react';
import {DropdownLayoutContext} from 'app/helpers/dropdownLayoutContext';
import {DropdownItemPropTypes} from 'app/constants/dropdownConstant';

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

DropdownSingleLabel.propTypes = {
  selectedOption: DropdownItemPropTypes.isRequired,
};
