import {getStyleForCellTable} from 'app/helpers/tableHelper';

export const ValueDiffTable = ({
  type,
  diff,
  children,
  className,
  width,
  widthDiff,
}) => (
  <span
    className={cn('ui-sheet__value-diff ui-sheet__text', className)}
    style={getStyleForCellTable(width)}
  >
    <span className="ui-sheet__value-diff-content">{children}</span>
    <span
      className={cn('ui-sheet__value-diff-diff', {
        [`ui-sheet__text--${type}`]: type,
      })}
      style={getStyleForCellTable(widthDiff)}
    >
      {diff}
    </span>
  </span>
);

ValueDiffTable.defaultProps = {
  type: '',
  diff: '',
  className: '',
  width: null,
  widthDiff: null,
};
