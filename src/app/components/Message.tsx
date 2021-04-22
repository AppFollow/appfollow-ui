import React, {MouseEventHandler} from 'react';
import cn from 'classnames';

import {MessageIcon} from './message/MessageIcon';

export interface MessageIconProps {
  type?: 'icon' | 'img' | 'node';
  name?: string;
  img?: string;
  size?: 'normal' | 'big';
  node?: React.ReactNode;
}

export type MessageType = 'warning' | 'info' | 'error' | 'default';

export interface MessageProps {
  type?: MessageType;
  className?: string;
  children: React.ReactNode;
  icon?: MessageIconProps;
  onRemove?: MouseEventHandler<HTMLElement>;
  actionNode?: React.ReactNode;
}

const MessageComponent = ({
  type,
  className,
  children,
  icon,
  onRemove,
  actionNode,
}: MessageProps) => (
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

export const Message = React.memo<MessageProps>(MessageComponent as any);
