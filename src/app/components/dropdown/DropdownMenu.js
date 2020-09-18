import PropTypes from 'prop-types';
import {useContext} from 'react';
import {DropdownLayoutContext} from 'app/helpers/dropdownLayoutContext';
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
  menuRef,
  styles,
  selectIndex,
  onMouseEnter,
  selectedValue,
  onApply,
  search,
  setSearch,
  loading,
}) => {
  const {Search, ListMulti, ListSingle, Message} = useContext(DropdownLayoutContext);

  return (
    <div
      ref={menuRef}
      className="ui-select__menu"
      style={styles}
    >
      {isShowSearch ? (
        <Search
          search={search}
          setSearch={setSearch}
        />
      ) : null}

      <Message
        isHaveData={Boolean(options.length)}
        isSearch={Boolean(search)}
        loading={loading}
      />

      {multi ? (
        <ListMulti
          options={options}
          onChange={onChange}
          value={value}
          onMouseEnter={onMouseEnter}
          selectIndex={selectIndex}
          selectedValue={selectedValue}
          onApply={onApply}
        />
      ) : (
        <ListSingle
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
  menuRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.instanceOf(Element),
    }),
  ]).isRequired,
  styles: PropTypes.objectOf(PropTypes.any),
  selectIndex: PropTypes.number,
  onMouseEnter: PropTypes.func,
  selectedValue: DropdownValuePropTypes,
  onApply: PropTypes.func,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

DropdownMenu.defaultProps = {
  selectIndex: undefined,
  onMouseEnter: undefined,
  selectedValue: undefined,
  onApply: undefined,
  styles: {},
};
