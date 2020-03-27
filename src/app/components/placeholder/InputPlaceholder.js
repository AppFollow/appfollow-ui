import PropTypes from 'prop-types';
import {TextPlaceholder} from 'app/components/placeholder/TextPlaceholder';

/**
 * Компонент заглушки инпута
 */
const InputPlaceholderComponent = ({
  className,
  iconDropdown,
  width,
}) => (
  <div
    className={cn('ui-placeholder ui-placeholder-input', className)}
    style={{width}}
  >
    <TextPlaceholder />
    {iconDropdown ? <i className={`icon ${iconDropdown}`} /> : null}
  </div>
);

InputPlaceholderComponent.propTypes = {
  className: PropTypes.string.isRequired,
  iconDropdown: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export const InputPlaceholder = React.memo(InputPlaceholderComponent);
