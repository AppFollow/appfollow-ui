import {MessageIcon} from 'app/components/message/MessageIcon';

const MessageComponent = ({
  type,
  className,
  children,
  icon,
  onRemove,
  actionNode,
}) => (
  <div className={cn('ui-infostrip', `ui-infostrip--${type}`, className)}>
    {icon ? <MessageIcon {...icon} /> : null}

    <div className="ui-infostrip__content">{children}</div>

    {actionNode ? (
      <div className="ui-infostrip__action">{actionNode}</div>
    ) : null}

    {onRemove ? (
      <div className="ui-infostrip__remove">
        <i onClick={onRemove} className="icon close ui-infostrip__remove-icon" />
      </div>
    ) : null}
  </div>
);

MessageComponent.displayName = 'Message';

MessageComponent.defaultProps = {
  type: 'default',
  className: '',
  icon: null,
  onRemove: null,
  actionNode: null,
};

export const Message = React.memo(MessageComponent);
