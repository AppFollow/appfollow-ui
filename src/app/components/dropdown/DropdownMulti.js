import {useContext} from 'react';
import {DropdownLayoutContext} from 'app/helpers/dropdownLayoutContext';
import {useDropdown} from 'app/hooks/useDropdown';
import {useSelectControl} from 'app/hooks/useSelectControl';
import {useSearch} from 'app/hooks/useSearch';
import {
  COUNT_OPTIONS_FOR_SEARCH,
  DropdownPropTypes,
  DropdownDefaultProps,
} from 'app/constants/dropdownConstant';
import {keyBy} from 'app/helpers/common';
import {DropdownMenuWrap} from 'app/components/dropdown/DropdownMenuWrap';

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

const DropdownMultiComponent = ({
  name,
  value,
  field,
  onChange,
  multi,
  search,
  className,
  options,
  disabled,
  startOpened,
  loading,
  multiLeftText,
}) => {
  const {Label} = useContext(DropdownLayoutContext);
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

  const [selectedValue, setSelectedValue] = React.useState(value);
  const refValue = React.useRef(value);

  React.useEffect(() => {
    setSelectedValue(value);
    refValue.current = value;
  }, [value]);

  React.useEffect(() => {
    setSelectedValue(refValue.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleOpen = React.useCallback(
    () => {
      if (!disabled) {
        open();
      }
    },
    [disabled, open],
  );

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

  const handleChangeSelectedValue = React.useCallback((event, newValue) => {
    setSelectedValue(prev => prev.includes(newValue)
      ? prev.filter(item => item !== newValue)
      : [...prev, newValue]);
  }, []);

  const mapOptionsByValue = React.useMemo(
    () => keyBy(options, 'value'),
    [options],
  );

  const valueOption = getValueOption(multi, selectedValue, mapOptionsByValue);

  const handleClickMultiLabel = React.useCallback(
    (event, option) => {
      if (!option || !option.value) return;

      handleChangeSelectedValue(event, option.value);
    },
    [handleChangeSelectedValue],
  );

  const handleTriggerSelect = React.useCallback((index) => {
    const option = searchedOptions[index];

    if (!option) return;

    handleChangeSelectedValue(null, option.value);
  }, [searchedOptions, handleChangeSelectedValue]);

  const {selectIndex, setSelectIndex} = useSelectControl({
    maxIndex: searchedOptions.length - 1,
    triggerSelect: handleTriggerSelect,
    isOpen,
  });

  const handleApply = React.useCallback(
    (event) => handleChange(event, selectedValue),
    [selectedValue, handleChange],
  );

  const handleMouseEnter = React.useCallback(
    (event, option, index) => setSelectIndex(index),
    [setSelectIndex],
  );

  const isShowSearch = search || options.length >= COUNT_OPTIONS_FOR_SEARCH;

  return (
    <div
      ref={dropdownRef}
      className={cn('ui-select', className, {
        'ui-select--disabled': disabled,
      })}
    >
      <Label
        multi={multi}
        name={name}
        valueOption={valueOption}
        onClick={handleOpen}
        isOpen={isOpen}
        onClickMultiLabel={handleClickMultiLabel}
        multiLeftText={multiLeftText}
      />
      {isOpen ? (
        <DropdownMenuWrap
          value={value}
          onChange={handleChangeSelectedValue}
          options={searchedOptions}
          multi={multi}
          isShowSearch={isShowSearch}
          dropdownRef={dropdownRef}
          onApply={handleApply}
          onMouseEnter={handleMouseEnter}
          selectIndex={selectIndex}
          selectedValue={selectedValue}
          search={searchText}
          setSearch={setSearch}
          loading={loading}
        />
      ) : null}
    </div>
  );
};

DropdownMultiComponent.propTypes = DropdownPropTypes;
DropdownMultiComponent.defaultProps = DropdownDefaultProps;

export const DropdownMulti = React.memo(DropdownMultiComponent);
