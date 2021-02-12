export const ToggleHiddenRowsTable = ({
  isHide,
  setIsHide,
}) => (
  <div className="ui-sheet__toggle" onClick={() => setIsHide(!isHide)}>
    <i
      className={cn('icon ui-sheet__toggle-icon', {
        'angle down': isHide,
        'angle up': !isHide,
      })}
    />
    {isHide ? 'More' : 'Less'}
  </div>
);
