import {useContext} from 'react';
import {DropdownLayoutContext} from 'app/helpers/dropdownLayoutContext';

export const DropdownOption = ({
  option,
  onMouseEnter,
  index,
}) => {
  const {Symbols} = useContext(DropdownLayoutContext);

  return (
    <div
      onMouseEnter={(event) => onMouseEnter(event, option, index)}
      className="ui-select__item-content"
    >
      <Symbols option={option} />
      <span className="ui-select__item-text">
        {option.text}
      </span>
    </div>
  );
};

DropdownOption.defaultProps = {
  onMouseEnter: () => {},
  index: null,
};
