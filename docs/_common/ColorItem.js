import React from 'react';
import cn from 'classnames';
import copy from 'clipboard-copy';

const ColorItemComponent = ({name, color, isInverted}) => {
  const style = {backgroundColor: color};
  const [isCopyName, setIsCopyName] = React.useState(false);
  const [isCopyColor, setIsCopyColor] = React.useState(false);
  const copyClick = (text, funcSetCopied) => {
    copy(text);

    funcSetCopied(true);

    setTimeout(() => funcSetCopied(false), 1000);
  };
  const handleClickName = () => copyClick(name, setIsCopyName);
  const handleClickColor = () => copyClick(color, setIsCopyColor);

  return (
    <div
      className={cn('color-item', {
        'color-item--inverted': isInverted,
      })}
      style={style}
    >
      <div
        onClick={handleClickName}
        className="color-item__name"
      >
        {isCopyName ? 'Copied!' : name}
      </div>
      <div
        onClick={handleClickColor}
        className="color-item__color"
      >
        {isCopyColor ? 'Copied!' : color}
      </div>
    </div>
  );
};

export const ColorItem = ColorItemComponent;
