import PropTypes from 'prop-types';
import {
  getStyleForCellTable,
} from 'app/helpers/tableHelper';

export const NumberTable = ({
  type,
  children,
  className,
  width,
}) => (
  <span
    className={cn('ui-sheet__number ui-sheet__text', className, {
      [`ui-sheet__text--${type}`]: type,
    })}
    style={getStyleForCellTable(width)}
  >
    {children}
  </span>
);

NumberTable.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['negative', 'positive']),
  className: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

NumberTable.defaultProps = {
  type: '',
  className: '',
  width: null,
};
