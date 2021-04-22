import React, {useContext} from 'react';
import {DropdownLayoutContext} from '../../helpers/dropdownLayoutContext';

export const DropdownMenuWrap = ({
  value,
  selectedValue,
  dropdownRef,
  ...otherProps
}) => {
  const {Menu} = useContext(DropdownLayoutContext);
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
    <Menu
      menuRef={menuRef}
      styles={styles}
      value={value}
      selectedValue={selectedValue}
      {...otherProps}
    />
  );
};

DropdownMenuWrap.defaultProps = {
  selectedValue: undefined,
};
