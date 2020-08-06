import PropTypes from 'prop-types';

export const COUNT_OPTIONS_FOR_SEARCH = 6;

export const DropdownOneValuePropTypes = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]);

export const DropdownValuePropTypes = PropTypes.oneOfType([
  DropdownOneValuePropTypes,
  PropTypes.arrayOf(DropdownOneValuePropTypes),
]);

export const DropdownItemPropTypes = PropTypes.shape({
  value: DropdownOneValuePropTypes,
  text: PropTypes.string,
  flag: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  backgroundImageColor: PropTypes.string,
  dotColor: PropTypes.string,
});

export const DropdownPropTypes = {
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
   * Кастомный лейбл
   */
  customLabel: PropTypes.node,
  /**
   * Если disabled
   */
  disabled: PropTypes.bool,
};

export const DropdownDefaultProps = {
  startOpened: false,
  value: null,
  className: '',
  field: '',
  multi: false,
  search: null,
  customLabel: null,
  disabled: false,
};
