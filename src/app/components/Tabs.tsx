import React, {useCallback} from 'react';
import cn from 'classnames';

export type Tab = {
  name: string;
  icon?: string;
  title: string;
  className?: string;
};

export interface TabsProps {
  tabs: Array<Tab>;
  activeTab?: string;
  children?: React.ReactNode;
  onChange?: Function;
  className?: string;
}

const TabsComponent = ({
  tabs,
  activeTab,
  children,
  onChange,
  className,
}: TabsProps) => {
  const handleClick = useCallback(event => {
    const {tab} = event.currentTarget.dataset;

    if (activeTab !== tab && onChange) {
      onChange(event, tab);
    }
  }, [onChange, activeTab]);

  return (
    <div className={cn('ui-tabs', className)}>
      <div className="ui-tabs__list ui-scrollbar ui-scrollbar__height--1">
        {tabs.map(item => (
          <div
            key={item.name}
            className={cn(
              'ui-tabs__item',
              {
                'ui-tabs__item--active': item.name === activeTab,
                'ui-tabs__item--no-text': !item.title,
              },
              item.className,
            )}
            data-tab={item.name}
            onClick={handleClick}
          >
            <div
              className={cn('ui-tabs__item-shadow', {
                'ui-tabs__item-shadow--active': item.name === activeTab,
              })}
            />
            {item.icon ? <i className={`${item.icon} icon`} /> : null}
            {item.title ? (
              <span data-tab={item.name} className="ui-tabs__item-text">
                {item.title}
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="ui-tabs__content">
        {children}
      </div>
    </div>
  );
};

TabsComponent.displayName = 'Tabs';

TabsComponent.defaultProps = {
  activeTab: '',
  className: '',
};

export const Tabs = React.memo<TabsProps>(TabsComponent);
