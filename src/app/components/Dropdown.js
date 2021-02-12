import {DropdownMulti} from 'app/components/dropdown/DropdownMulti';
import {DropdownSingle} from 'app/components/dropdown/DropdownSingle';

import {DropdownLabel} from 'app/components/dropdown/DropdownLabel';
import {DropdownEmptyLabel} from 'app/components/dropdown/labels/DropdownEmptyLabel';
import {DropdownMultiLabel} from 'app/components/dropdown/labels/DropdownMultiLabel';
import {DropdownSingleLabel} from 'app/components/dropdown/labels/DropdownSingleLabel';

import {DropdownSymbols} from 'app/components/dropdown/DropdownSymbols';
import {DropdownMenu} from 'app/components/dropdown/DropdownMenu';
import {DropdownSearch} from 'app/components/dropdown/DropdownSearch';
import {DropdownOption} from 'app/components/dropdown/options/DropdownOption';
import {DropdownListSingle} from 'app/components/dropdown/menu/DropdownListSingle';
import {DropdownListMulti} from 'app/components/dropdown/menu/DropdownListMulti';
import {DropdownApplyButton} from 'app/components/dropdown/DropdownApplyButton';
import {DropdownMessage} from 'app/components/dropdown/DropdownMessage';

import {DropdownLayoutContext} from 'app/helpers/dropdownLayoutContext';

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

const DropdownComponent = ({layouts, ...props}) => {
  const value = React.useMemo(() => ({
    ...defaultLayouts,
    ...layouts,
  }), [layouts]);

  return (
    <DropdownLayoutContext.Provider value={value}>
      {props.multi
        ? <DropdownMulti {...props} />
        : <DropdownSingle {...props} />}
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

export const Dropdown = React.memo(DropdownComponent);

Object.keys(defaultLayouts).forEach(componentName => {
  Dropdown[componentName] = defaultLayouts[componentName];
});
