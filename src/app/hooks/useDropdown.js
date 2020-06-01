import {useState, useCallback, useRef, useEffect} from 'react';
import {ESC_KEY} from 'app/constants/keyConstant';

const onEscapeKeyPress = fn => ({keyCode}) => keyCode === ESC_KEY ? fn() : null;

export const useDropdown = ({
  startOpened = false,
} = {}) => {
  const [isOpen, setIsOpen] = useState(startOpened);
  const dropdownRef = useRef(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => (isOpen ? close : open)(), [close, isOpen, open]);

  useEffect(() => {
    const handleGlobalMouseDown = ({target}) => {
      if (!dropdownRef.current || dropdownRef.current.contains(target)) return;

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
