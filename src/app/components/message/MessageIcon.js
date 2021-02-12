const MessageIconComponent = ({
  type,
  name,
  img,
  node,
  size,
  isBackground,
  className,
}) => (
  <div
    className={cn('ui-infostrip__icon', className, {
      'ui-infostrip__icon--background': isBackground,
      [`ui-infostrip__icon--${size}`]: size !== 'normal',
    })}
  >
    {type === 'icon' ? (
      <i className={`icon ${name} ui-infostrip__icon-icon`} />
    ) : null}

    {type === 'img' ? (
      <img
        src={img}
        alt="Banner icon"
        className="ui-infostrip__icon-img"
      />

    ) : null}
    {type === 'node' ? node : null}
  </div>
);

MessageIconComponent.defaultProps = {
  type: 'icon',
  name: '',
  img: '',
  node: null,
  size: 'normal',
  isBackground: true,
  className: '',
};

export const MessageIcon = React.memo(MessageIconComponent);
