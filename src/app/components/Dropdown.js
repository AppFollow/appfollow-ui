import PropTypes from 'prop-types';
import {DropdownMulti} from 'app/components/dropdown/DropdownMulti';
import {DropdownSingle} from 'app/components/dropdown/DropdownSingle';

const DropdownComponent = (props) => props.multi
  ? <DropdownMulti {...props} />
  : <DropdownSingle {...props} />;

DropdownComponent.displayName = 'Dropdown';

DropdownComponent.propTypes = {
  multi: PropTypes.bool,
};

DropdownComponent.defaultProps = {
  multi: false,
};

export const Dropdown = React.memo(DropdownComponent);
