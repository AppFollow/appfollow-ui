import PropTypes from 'prop-types';

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
  /** Кастомный класс для иконки */
  className: PropTypes.string,
};

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
