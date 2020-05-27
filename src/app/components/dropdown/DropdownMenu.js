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
}) => {
  const menuRef = React.useRef(null);
  const [leftMargin, setLeftMargin] = React.useState(0);
  const [isShow, setIsShow] = React.useState(false);
  const {search, setSearch, viewList} = useSearch(options);

  React.useEffect(() => {
    if (menuRef.current) {
      const MAX_PADDING_RIGHT = 24;

      const positionMenu = menuRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      // отступ от правого края окна
      const paddingRight = windowWidth - positionMenu.right;

      if (paddingRight < MAX_PADDING_RIGHT) {
        setLeftMargin(paddingRight - MAX_PADDING_RIGHT);
      }

      setIsShow(true);
    }
  }, []);

  const style = React.useMemo(() => {
    const resultStyle = {left: `${leftMargin}px`};

    if (!isShow) {
      resultStyle.opacity = 0;
    }

    return resultStyle;
  }, [isShow, leftMargin]);

  return (
    <div
      ref={menuRef}
      className="ui-select__menu"
      style={style}
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
};
