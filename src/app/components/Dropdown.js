/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import {
  DropdownValuePropTypes,
  DropdownItemPropTypes,
} from 'app/constants/dropdownConstant';
import {DropdownMulti} from 'app/components/dropdown/DropdownMulti';
import {DropdownSingle} from 'app/components/dropdown/DropdownSingle';

import {DropdownLabel} from 'app/components/dropdown/DropdownLabel';
import {DropdownEmptyLabel} from 'app/components/dropdown/labels/DropdownEmptyLabel';
import {DropdownMultiLabel} from 'app/components/dropdown/labels/DropdownMultiLabel';
import {DropdownSingleLabel} from 'app/components/dropdown/labels/DropdownSingleLabel';

import {DropdownSymbols} from 'app/components/dropdown/DropdownSymbols';
import {DropdownMenu} from 'app/components/dropdown/DropdownMenu';
import {DropdownSearch} from 'app/components/dropdown/DropdownSearch';
import {DropdownOption} from 'app/components/dropdown/options/DropdownOption';
import {DropdownListSingle} from 'app/components/dropdown/menu/DropdownListSingle';
import {DropdownListMulti} from 'app/components/dropdown/menu/DropdownListMulti';
import {DropdownApplyButton} from 'app/components/dropdown/DropdownApplyButton';
import {DropdownMessage} from 'app/components/dropdown/DropdownMessage';

import {DropdownLayoutContext} from 'app/helpers/dropdownLayoutContext';

const defaultLayouts = {
  Label: DropdownLabel,
  EmptyLabel: DropdownEmptyLabel,
  SingleLabel: DropdownSingleLabel,
  MultiLabel: DropdownMultiLabel,
  Symbols: DropdownSymbols,
  Menu: DropdownMenu,
  Search: DropdownSearch,
  Option: DropdownOption,
  ListMulti: DropdownListMulti,
  ListSingle: DropdownListSingle,
  ApplyButton: DropdownApplyButton,
  Message: DropdownMessage,
};

const DropdownComponent = ({layouts, ...props}) => {
  const value = React.useMemo(() => ({
    ...defaultLayouts,
    ...layouts,
  }), [layouts]);

  return (
    <DropdownLayoutContext.Provider value={value}>
      {props.multi
        ? <DropdownMulti {...props} />
        : <DropdownSingle {...props} />}
    </DropdownLayoutContext.Provider>
  );
};

DropdownComponent.displayName = 'Dropdown';

DropdownComponent.propTypes = {
  /**
   * Автооткрытие
   */
  startOpened: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Значение дропдауна
   */
  value: DropdownValuePropTypes,
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
    | dotColor - цвет круглой точки (например цвет коллекции)
   */
  options: PropTypes.arrayOf(DropdownItemPropTypes).isRequired,
  /**
   * Нужен ли поиск, по дефолту поиск появляется если больше 8 значений
   */
  search: PropTypes.bool,
  /**
   * Если disabled
   */
  disabled: PropTypes.bool,
  /**
   * Если данные загружаются
   */
  loading: PropTypes.bool,
  /**
   * Кастомные элементы дропдауна:
   *
    Label: React.Element,
    EmptyLabel: React.Element,
    SingleLabel: React.Element,
    MultiLabel: React.Element,
    Symbols: React.Element,
    Menu: React.Element,
    Search: React.Element,
    Option: React.Element,
    ListMulti: React.Element,
    ListSingle: React.Element,
    ApplyButton: React.Element,
    Message: React.Element,
   */
  layouts: {
    Label: React.Element,
    EmptyLabel: React.Element,
    SingleLabel: React.Element,
    MultiLabel: React.Element,
    Symbols: React.Element,
    Menu: React.Element,
    Search: React.Element,
    Option: React.Element,
    ListMulti: React.Element,
    ListSingle: React.Element,
    ApplyButton: React.Element,
    Message: React.Element,
  },
  /**
   * Текст слева при мультивыборе, по дефолту берет name
   */
  multiLeftText: PropTypes.string,
};

DropdownComponent.defaultProps = {
  startOpened: false,
  value: null,
  className: '',
  field: '',
  multi: false,
  search: null,
  disabled: false,
  loading: false,
  layouts: {},
  multiLeftText: undefined,
};

export const Dropdown = React.memo(DropdownComponent);

Object.keys(defaultLayouts).forEach(componentName => {
  Dropdown[componentName] = defaultLayouts[componentName];
});
