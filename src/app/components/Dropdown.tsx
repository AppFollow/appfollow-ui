import React from 'react';

import {DropdownLayoutContext} from '../helpers/dropdownLayoutContext';

import {DropdownMulti} from './dropdown/DropdownMulti';
import {DropdownSingle} from './dropdown/DropdownSingle';

import {DropdownLabel} from './dropdown/DropdownLabel';
import {DropdownEmptyLabel} from './dropdown/labels/DropdownEmptyLabel';
import {DropdownMultiLabel} from './dropdown/labels/DropdownMultiLabel';
import {DropdownSingleLabel} from './dropdown/labels/DropdownSingleLabel';

import {DropdownSymbols} from './dropdown/DropdownSymbols';
import {DropdownMenu} from './dropdown/DropdownMenu';
import {DropdownSearch} from './dropdown/DropdownSearch';
import {DropdownOption} from './dropdown/options/DropdownOption';
import {DropdownListSingle} from './dropdown/menu/DropdownListSingle';
import {DropdownListMulti} from './dropdown/menu/DropdownListMulti';
import {DropdownApplyButton} from './dropdown/DropdownApplyButton';
import {DropdownMessage} from './dropdown/DropdownMessage';

export type DropdownValue = string | number | boolean;

export type DropdownItem = {
  value?: DropdownValue;
  text?: string;
  flag?: string;
  icon?: string;
  iconColor?: string;
  color?: string;
  image?: string;
  backgroundImageColor?: string;
  description?: string;
};

export type TLayoutNameDropdown =
  | 'Label'
  | 'EmptyLabel'
  | 'SingleLabel'
  | 'MultiLabel'
  | 'Symbols'
  | 'Menu'
  | 'Search'
  | 'Option'
  | 'ListMulti'
  | 'ListSingle'
  | 'ApplyButton'
  | 'Message';

export interface IDropdownMenu {
  value: Array<string>;
  onChange: (event: unknown, value: string) => void;
  options: Array<DropdownItem>;
  isShowSearch: boolean;
  menuRef: React.RefObject<HTMLDivElement> | null;
  styles: React.CSSProperties;
  selectIndex: number;
  onMouseEnter: (event: unknown) => void;
  selectedValue: number;
  onApply: (event: unknown) => void;
  search: string;
  setSearch: (search: string) => void;
  loading: boolean;
}

export interface IDropdownOption {
  option: DropdownItem;
  onMouseEnter: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    option: DropdownItem,
    index: number,
  ) => void;
  index: number;
}

export interface DropdownProps {
  name?: string;
  value?: DropdownValue | ReadonlyArray<DropdownValue>;
  field?: string;
  onChange?: Function;
  multi?: boolean;
  search?: boolean;
  className?: string;
  options: ReadonlyArray<DropdownItem>;
  multiLeftText?: string;
  layouts?: Partial<Record<TLayoutNameDropdown, React.ComponentType<any> | React.NamedExoticComponent<any>>>;
  disabled?: boolean;
  startOpened?: boolean;
}

const defaultLayouts = {
  Label: DropdownLabel,
  EmptyLabel: DropdownEmptyLabel,
  SingleLabel: DropdownSingleLabel,
  MultiLabel: DropdownMultiLabel,
  Symbols: DropdownSymbols,
  Menu: DropdownMenu,
  Search: DropdownSearch,
  Option: DropdownOption,
  ListMulti: DropdownListMulti,
  ListSingle: DropdownListSingle,
  ApplyButton: DropdownApplyButton,
  Message: DropdownMessage,
};

const DropdownComponent = ({layouts, ...props}: DropdownProps) => {
  const value = React.useMemo(() => ({
    ...defaultLayouts,
    ...layouts,
  }), [layouts]);

  return (
    <DropdownLayoutContext.Provider value={value}>
      {props.multi
        ? <DropdownMulti {...props as any} />
        : <DropdownSingle {...props as any} />}
    </DropdownLayoutContext.Provider>
  );
};

DropdownComponent.displayName = 'Dropdown';

DropdownComponent.defaultProps = {
  startOpened: false,
  value: null,
  className: '',
  field: '',
  multi: false,
  search: null,
  disabled: false,
  loading: false,
  layouts: {},
  multiLeftText: undefined,
};

export const Dropdown = (
  React.memo(DropdownComponent) as any as React.NamedExoticComponent<DropdownProps> &
    Record<TLayoutNameDropdown, React.FC<{[key: string]: any}>>
);

Object.keys(defaultLayouts).forEach(componentName => {
  Dropdown[componentName] = defaultLayouts[componentName];
});
