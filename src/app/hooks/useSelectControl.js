import {
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import {
  ENTER_KEY,
  UP_KEY,
  DOWN_KEY,
} from 'app/constants/keyConstant';

const getBeforeIndex = (currentIndex) => {
  if (currentIndex - 1 < 0) {
    return currentIndex;
  }

  return currentIndex - 1;
};

const getNextIndex = (currentIndex, maxIndex) => {
  if (maxIndex && currentIndex + 1 > maxIndex) {
    return currentIndex;
  }

  return currentIndex + 1;
};

export const useSelectControl = ({
  startIndex = 0,
  maxIndex,
  triggerSelect,
  isOpen = false,
} = {}) => {
  const [selectIndex, setSelectIndex] = useState(startIndex);
  const selectIndexRef = useRef(startIndex);

  const handleChangeSelectIndex = useCallback((value) => {
    selectIndexRef.current = value;

    setSelectIndex(value);
  }, []);

  const handleKeyPress = (event) => {
    if (event.keyCode === ENTER_KEY) {
      event.preventDefault();

      triggerSelect(selectIndexRef.current);
    }

    if (event.keyCode === UP_KEY) {
      event.preventDefault();
      handleChangeSelectIndex(getBeforeIndex(selectIndexRef.current));
    }

    if (event.keyCode === DOWN_KEY) {
      event.preventDefault();

      handleChangeSelectIndex(getNextIndex(selectIndexRef.current, maxIndex));
    }
  };

  useEffect(() => {
    if (isOpen) {
      handleChangeSelectIndex(0);
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, maxIndex]);

  return {
    selectIndex,
    setSelectIndex: handleChangeSelectIndex,
  };
};
