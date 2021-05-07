import React, {useContext, useRef, useState, useEffect, CSSProperties} from 'react';
import {DropdownLayoutContext} from '../../helpers/dropdownLayoutContext';

function isOpenUp(dropdownRect: DOMRect, menuRect: DOMRect): boolean {
  return (
    (dropdownRect.bottom + menuRect.height) >= window.innerHeight &&
    (dropdownRect.top - menuRect.height) >= 0
  );
}

interface DropdownMenuWrapProps {
  value: string[];
  selectedValue?: string[];
  dropdownRef: React.RefObject<HTMLElement>;
}

export const DropdownMenuWrap = React.memo(({
  value,
  selectedValue,
  dropdownRef,
  ...otherProps
}: DropdownMenuWrapProps) => {
  const menuRef = useRef<HTMLElement>(null);
  const {Menu} = useContext(DropdownLayoutContext);

  const [styles, setStyles] = useState<CSSProperties>({opacity: 0, left: '-10000px'});

  useEffect(() => {
    if (menuRef.current && dropdownRef.current) {
      const MAX_PADDING_RIGHT = 24;

      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const menuRect = menuRef.current.getBoundingClientRect();
      const paddingRight = window.innerWidth - (dropdownRect.left + window.pageXOffset) - menuRect.width;

      setStyles({
        left: paddingRight < MAX_PADDING_RIGHT ? `${paddingRight - MAX_PADDING_RIGHT}px` : 0,
        ...(isOpenUp(dropdownRect, menuRect) && {
          top: 'auto',
          bottom: '100%',
          marginTop: 0,
          marginBottom: '6px',
        })
      });
    }
  }, [value, selectedValue, dropdownRef]);

  return (
    <Menu
      menuRef={menuRef}
      styles={styles}
      value={value}
      selectedValue={selectedValue}
      {...otherProps}
    />
  );
});
