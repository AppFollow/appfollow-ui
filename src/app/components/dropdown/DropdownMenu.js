import PropTypes from 'prop-types';
import {DropdownSearch} from 'app/components/dropdown/DropdownSearch';
import {DropdownListSingle} from 'app/components/dropdown/menu/DropdownListSingle';
import {DropdownListMulti} from 'app/components/dropdown/menu/DropdownListMulti';
import {
  DropdownItemPropTypes,
  DropdownValuePropTypes,
} from 'app/constants/dropdownConstant';

export const DropdownMenu = ({
  value,
  onChange,
  options,
  multi,
  isShowSearch,
  dropdownRef,
  selectIndex,
  onMouseEnter,
  selectedValue,
  onApply,
  search,
  setSearch,
}) => {
  const menuRef = React.useRef(null);
  const [styles, setStyles] = React.useState({
    opacity: 0,
    left: '-10000px',
  });

  React.useEffect(() => {
    if (menuRef.current && dropdownRef.current) {
      const MAX_PADDING_RIGHT = 24;

      const {left} = dropdownRef.current.getBoundingClientRect();
      const {width} = menuRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowPageXOffset = window.pageXOffset;

      const realLeft = left + windowPageXOffset;

      // отступ от правого края окна
      const paddingRight = windowWidth - realLeft - width;

      const resultLeft = paddingRight < MAX_PADDING_RIGHT
        ? `${paddingRight - MAX_PADDING_RIGHT}px`
        : 0;

      setStyles({left: resultLeft});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, selectedValue]);

  return (
    <div
      ref={menuRef}
      className="ui-select__menu"
      style={styles}
    >
      {isShowSearch ? (
        <DropdownSearch
          search={search}
          setSearch={setSearch}
        />
      ) : null}

      {multi ? (
        <DropdownListMulti
          options={options}
          onChange={onChange}
          value={value}
          onMouseEnter={onMouseEnter}
          selectIndex={selectIndex}
          selectedValue={selectedValue}
          onApply={onApply}
        />
      ) : (
        <DropdownListSingle
          options={options}
          onChange={onChange}
          value={value}
          onMouseEnter={onMouseEnter}
          selectIndex={selectIndex}
        />
      )}
    </div>
  );
};

DropdownMenu.propTypes = {
  multi: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(DropdownItemPropTypes).isRequired,
  value: DropdownValuePropTypes.isRequired,
  isShowSearch: PropTypes.bool.isRequired,
  dropdownRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.instanceOf(Element),
    }),
  ]).isRequired,
  selectIndex: PropTypes.number,
  onMouseEnter: PropTypes.func,
  selectedValue: DropdownValuePropTypes,
  onApply: PropTypes.func,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

DropdownMenu.defaultProps = {
  selectIndex: undefined,
  onMouseEnter: undefined,
  selectedValue: undefined,
  onApply: undefined,
};
