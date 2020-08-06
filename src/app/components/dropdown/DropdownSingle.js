import {useDropdown} from 'app/hooks/useDropdown';
import {useSelectControl} from 'app/hooks/useSelectControl';
import {useSearch} from 'app/hooks/useSearch';
import {
  COUNT_OPTIONS_FOR_SEARCH,
  DropdownPropTypes,
  DropdownDefaultProps,
} from 'app/constants/dropdownConstant';
import {DropdownLabel} from 'app/components/dropdown/DropdownLabel';
import {DropdownMenu} from 'app/components/dropdown/DropdownMenu';
import {getIsEmptyArray, keyBy} from 'app/helpers/common';

const getValueOption = (multi, value, mapOptionsByValue) => {
  let valueOption = null;

  if (!multi && value && mapOptionsByValue[value]) {
    valueOption = mapOptionsByValue[value];
  }

  if (multi && Array.isArray(value) && value.length) {
    valueOption = value.reduce((acc, item) => {
      if (mapOptionsByValue[item]) {
        acc.push(mapOptionsByValue[item]);
      }

      return acc;
    }, []);
  }

  return valueOption;
};

const DropdownSingleComponent = ({
  name,
  value,
  field,
  onChange,
  multi,
  search,
  className,
  options,
  customLabel,
  disabled,
  startOpened,
}) => {
  const {
    dropdownRef,
    isOpen,
    open,
    close,
  } = useDropdown({startOpened});

  const {
    search: searchText,
    setSearch,
    viewList: searchedOptions,
  } = useSearch(options);

  const handleChange = React.useCallback(
    (event, newValue) => {
      const changeQuery = field
        ? {[field]: newValue}
        : newValue;

      onChange(event, changeQuery);
      close();
    },
    [close, field, onChange],
  );

  const mapOptionsByValue = React.useMemo(
    () => keyBy(options, 'value'),
    [options],
  );

  const valueOption = getValueOption(multi, value, mapOptionsByValue);

  const isEmpty = !value || !valueOption;

  const handleOpen = React.useCallback(
    () => {
      if (!disabled) {
        open();
      }
    },
    [open, disabled],
  );

  const handleTriggerSelect = React.useCallback((index) => {
    const option = searchedOptions[index];

    if (!option) return;

    handleChange(null, option.value);
  }, [handleChange, searchedOptions]);

  const {selectIndex, setSelectIndex} = useSelectControl({
    maxIndex: searchedOptions.length - 1,
    triggerSelect: handleTriggerSelect,
    isOpen,
  });

  const handleMouseEnter = React.useCallback(
    (event, option, index) => setSelectIndex(index),
    [setSelectIndex],
  );

  const isShowSearch = search || options.length >= COUNT_OPTIONS_FOR_SEARCH;

  return (
    <div
      ref={dropdownRef}
      className={cn('ui-select', className, {
        'ui-select--custom-label': customLabel,
        'ui-select--disabled': disabled,
      })}
    >
      {customLabel ? (
        <span onClick={handleOpen}>
          {customLabel}
        </span>
      ) : (
        <DropdownLabel
          isEmpty={isEmpty}
          multi={multi}
          name={name}
          valueOption={valueOption}
          onClick={handleOpen}
          isOpen={isOpen}
        />
      )}
      {isOpen ? (
        <DropdownMenu
          value={value}
          onChange={handleChange}
          options={searchedOptions}
          multi={multi}
          isShowSearch={isShowSearch}
          dropdownRef={dropdownRef}
          onMouseEnter={handleMouseEnter}
          selectIndex={selectIndex}
          search={searchText}
          setSearch={setSearch}
        />
      ) : null}
    </div>
  );
};

DropdownSingleComponent.propTypes = DropdownPropTypes;
DropdownSingleComponent.defaultProps = DropdownDefaultProps;

export const DropdownSingle = React.memo(DropdownSingleComponent);
