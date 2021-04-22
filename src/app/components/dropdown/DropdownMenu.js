import React, {useContext} from 'react';
import {DropdownLayoutContext} from '../../helpers/dropdownLayoutContext';

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

DropdownMenu.defaultProps = {
  selectIndex: undefined,
  onMouseEnter: undefined,
  selectedValue: undefined,
  onApply: undefined,
  styles: {},
};
