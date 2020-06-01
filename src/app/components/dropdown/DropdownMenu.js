import PropTypes from 'prop-types';
import {DropdownSearch} from 'app/components/dropdown/DropdownSearch';
import {DropdownListSingle} from 'app/components/dropdown/menu/DropdownListSingle';
import {DropdownListMulti} from 'app/components/dropdown/menu/DropdownListMulti';
import {
  DropdownItemPropTypes,
  DropdownValuePropTypes,
} from 'app/constants/dropdownConstant';
import {useSearch} from 'app/hooks/useSearch';

export const DropdownMenu = ({
  value,
  onChange,
  options,
  multi,
  isShowSearch,
  dropdownRef,
}) => {
  const menuRef = React.useRef(null);
  const [styles, setStyles] = React.useState({
    opacity: 0,
    left: '-10000px',
  });
  const {search, setSearch, viewList} = useSearch(options);

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
  }, []);

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
          options={viewList}
          onChange={onChange}
          value={value}
        />
      ) : (
        <DropdownListSingle
          options={viewList}
          onChange={onChange}
          value={value}
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
};
