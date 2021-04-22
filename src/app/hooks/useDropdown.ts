import React, {useState, useCallback, useRef, useEffect} from 'react';
import {ESC_KEY} from '../constants/keyConstant';

export interface IResultUseDropdown {
  dropdownRef: React.RefObject<HTMLDivElement> | null;
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

const onEscapeKeyPress = (fn: () => void) => ({keyCode}: {keyCode: number}) => keyCode === ESC_KEY ? fn() : null;

export const useDropdown = ({startOpened = false} = {}): IResultUseDropdown => {
  const [isOpen, setIsOpen] = useState(startOpened);
  const dropdownRef = useRef(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => (isOpen ? close : open)(), [close, isOpen, open]);

  useEffect(() => {
    const handleGlobalMouseDown = ({target}: {target: any}) => {
      if (!dropdownRef.current || (dropdownRef.current as any)?.contains?.(target)) return;

      close();
    };

    const handleGlobalKeydown = onEscapeKeyPress(close);

    document.addEventListener('mousedown', handleGlobalMouseDown);
    document.addEventListener('keydown', handleGlobalKeydown);

    return () => {
      document.removeEventListener('mousedown', handleGlobalMouseDown);
      document.removeEventListener('keydown', handleGlobalKeydown);
    };
  }, [close]);

  return {dropdownRef, isOpen, open, close, toggle};
};
