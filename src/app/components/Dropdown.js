import PropTypes from 'prop-types';
import {useDropdown} from 'app/hooks/useDropdown';
import {
  COUNT_OPTIONS_FOR_SEARCH,
  DropdownValuePropTypes,
  DropdownItemPropTypes,
} from 'app/constants/dropdownConstant';
import {DropdownLabel} from 'app/components/dropdown/DropdownLabel';
import {DropdownMenu} from 'app/components/dropdown/DropdownMenu';
import {DropdownRemove} from 'app/components/dropdown/DropdownRemove';
import {getIsEmptyArray, keyBy, noop} from 'app/helpers/common';

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

const DropdownComponent = ({
  id,
  name,
  value,
  field,
  onChange,
  multi,
  search,
  className,
  options,
  removable,
  onRemove,
  customLabel,
}) => {
  const {
    dropdownRef,
    isOpen,
    toggle,
    close,
    positionDropdown,
  } = useDropdown();

  const mapOptionsByValue = React.useMemo(
    () => keyBy(options, 'value'),
    [options],
  );

  const valueOption = getValueOption(multi, value, mapOptionsByValue);

  let isEmpty = !value || !valueOption;

  if (multi) {
    isEmpty = getIsEmptyArray(value) || getIsEmptyArray(valueOption);
  }

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

  const isShowSearch = search || options.length >= COUNT_OPTIONS_FOR_SEARCH;

  return (
    <div
      ref={dropdownRef}
      className={cn('ui-select', className, {
        'ui-select--removable': removable,
        'ui-select--custom-label': customLabel,
      })}
    >
      {customLabel ? (
        <span onClick={toggle}>
          {customLabel}
        </span>
      ) : (
        <DropdownLabel
          isEmpty={isEmpty}
          multi={multi}
          name={name}
          valueOption={valueOption}
          onClick={toggle}
        />
      )}
      {removable ? <DropdownRemove onRemove={onRemove} id={id} /> : null}
      {isOpen ? (
        <DropdownMenu
          value={value}
          onChange={handleChange}
          options={options}
          multi={multi}
          isShowSearch={isShowSearch}
          positionDropdown={positionDropdown}
          dropdownRef={dropdownRef}
        />
      ) : null}
    </div>
  );
};

DropdownComponent.displayName = 'Dropdown';

DropdownComponent.propTypes = {
  className: PropTypes.string,
  /**
   * Значение дропдауна
   */
  value: DropdownValuePropTypes,
  /**
   * Id фильтра, прокидывается в onRemove
   */
  id: PropTypes.string,
  /**
   * Поле, которое изменяется в onChange => (event, {field: newValue})
   * Если не передали, то onChange => (event, newValue)
   */
  field: PropTypes.string,
  /**
   * Возможен ли мультивыбор
   */
  multi: PropTypes.bool,
  /**
   * Имя дропдауна, отображается как плейсхолдер и при выборе нескольких значений
   */
  name: PropTypes.string.isRequired,
  /**
   * onChange => (event, {field: newValue})
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Список возможных значений
    | value - значение
    | text - текст
    | flag - флаг us
    | icon - иконка world
    | color - квадратик с цветом в hex (например цвет тега)
    | image - ссылка на изображение (например иконка аппа)
    | backgroundImageColor - цвет фона изображения (например для windows аппов)
   */
  options: PropTypes.arrayOf(DropdownItemPropTypes).isRequired,
  /**
   * Нужен ли поиск, по дефолту поиск появляется если больше 8 значений
   */
  search: PropTypes.bool,
  /**
   * Можно ли закрыть фильтр
   */
  removable: PropTypes.bool,
  /**
   * Колбек закрытия фильтра
   */
  onRemove: PropTypes.func,
  /**
   * Кастомный лейбл
   */
  customLabel: PropTypes.node,
};

DropdownComponent.defaultProps = {
  value: null,
  className: '',
  field: '',
  id: '',
  multi: false,
  search: null,
  removable: false,
  onRemove: noop,
  customLabel: null,
};

export const Dropdown = React.memo(DropdownComponent);
