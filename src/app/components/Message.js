import PropTypes from 'prop-types';
import {MessageIcon} from 'app/components/message/MessageIcon';

const MessageComponent = ({
  type,
  className,
  children,
  icon,
  onRemove,
  actionNode,
}) => (
  <div className={cn('ui-message', `ui-message--${type}`, className)}>
    {icon ? <MessageIcon {...icon} /> : null}

    <div className="ui-message__content">{children}</div>

    {actionNode ? (
      <div className="ui-message__action">{actionNode}</div>
    ) : null}

    {onRemove ? (
      <div className="ui-message__remove">
        <i onClick={onRemove} className="icon close ui-message__remove-icon" />
      </div>
    ) : null}
  </div>
);

MessageComponent.displayName = 'Message';

MessageComponent.propTypes = {
  type: PropTypes.oneOf(['warning', 'info', 'error', 'default']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  /** Иконка */
  icon: PropTypes.shape({
    /** Тип иконки */
    type: PropTypes.oneOf(['icon', 'img', 'node']),
    /** Name иконки из font awesome */
    name: PropTypes.string,
    /** Ссылка на картинку */
    img: PropTypes.string,
    /** JSX вместо картинки */
    node: PropTypes.node,
    /** Размер картинки/иконки */
    size: PropTypes.oneOf(['normal', 'big']),
    /** Нужна ли белая подложка */
    isBackground: PropTypes.bool,
    /** Кастомный класс для иконки */
    className: PropTypes.string,
  }),
  /** Колбек, если баннер умеет закрываться */
  onRemove: PropTypes.func,
  actionNode: PropTypes.bool,
};

MessageComponent.defaultProps = {
  type: 'default',
  className: '',
  icon: null,
  onRemove: null,
  actionNode: null,
};

export const Message = React.memo(MessageComponent);
