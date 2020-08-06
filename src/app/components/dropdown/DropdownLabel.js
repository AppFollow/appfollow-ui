import PropTypes from 'prop-types';
import {DropdownEmptyLabel} from 'app/components/dropdown/labels/DropdownEmptyLabel';
import {DropdownSingleLabel} from 'app/components/dropdown/labels/DropdownSingleLabel';
import {DropdownMultiLabel} from 'app/components/dropdown/labels/DropdownMultiLabel';
import {DropdownItemPropTypes} from 'app/constants/dropdownConstant';

export const DropdownLabel = ({
  isEmpty,
  valueOption,
  multi,
  name,
  onClick,
  isOpen,
  onClickMultiLabel,
}) => (
  <div className="ui-select__value" onClick={onClick}>
    {isEmpty ? <DropdownEmptyLabel name={name} /> : null}

    {!isEmpty && !multi ? <DropdownSingleLabel option={valueOption} /> : null}

    {!isEmpty && multi ? (
      <DropdownMultiLabel
        options={valueOption}
        name={name}
        isEditMode={isOpen}
        onClickMultiLabel={onClickMultiLabel}
      />
    ) : null}

    <i className="icon dropdown ui-select__arrow-icon" />
  </div>
);

DropdownLabel.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
  multi: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  valueOption: PropTypes.oneOfType([
    DropdownItemPropTypes,
    PropTypes.arrayOf(DropdownItemPropTypes),
  ]),
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClickMultiLabel: PropTypes.func,
};

DropdownLabel.defaultProps = {
  valueOption: null,
  onClickMultiLabel: undefined,
};
