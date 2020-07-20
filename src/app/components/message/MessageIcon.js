import PropTypes from 'prop-types';

const MessageIconComponent = ({
  type,
  name,
  img,
  node,
  size,
  isBackground,
}) => (
  <div
    className={cn('ui-message__icon', {
      'ui-message__icon--background': isBackground,
      [`ui-message__icon--${size}`]: size !== 'normal',
    })}
  >
    {type === 'icon' ? (
      <i className={`icon ${name} ui-message__icon-icon`} />
    ) : null}

    {type === 'img' ? (
      <img
        src={img}
        alt="Banner icon"
        className="ui-message__icon-img"
      />

    ) : null}
    {type === 'node' ? node : null}
  </div>
);

MessageIconComponent.propTypes = {
  /** Тип иконки */
  type: PropTypes.oneOf(['icon', 'img', 'node']),
  /** Name иконки из font awesome */
  name: PropTypes.string,
  /** Ссылка на картинку */
  img: PropTypes.string,
  /** Jsx вместо картинки */
  node: PropTypes.node,
  /** Размер картинки/иконки */
  size: PropTypes.oneOf(['normal', 'big']),
  /** Нужна ли белая подложка */
  isBackground: PropTypes.bool,
};

MessageIconComponent.defaultProps = {
  type: 'icon',
  name: '',
  img: '',
  node: null,
  size: 'normal',
  isBackground: true,
};

export const MessageIcon = React.memo(MessageIconComponent);
