import PropTypes from 'prop-types';
import {useContext} from 'react';
import {DropdownLayoutContext} from 'app/helpers/dropdownLayoutContext';
import {DropdownItemPropTypes} from 'app/constants/dropdownConstant';

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

DropdownOption.propTypes = {
  option: DropdownItemPropTypes.isRequired,
  onMouseEnter: PropTypes.func,
  index: PropTypes.number,
};

DropdownOption.defaultProps = {
  onMouseEnter: () => {},
  index: null,
};
