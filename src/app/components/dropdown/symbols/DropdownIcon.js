export const DropdownIcon = ({icon, iconColor}) => {
  const styles = React.useMemo(() => iconColor ? {color: iconColor} : undefined, [iconColor]);

  return (
    <i className={`icon ${icon} ui-select__icon ui-select__symbol`} style={styles} />
  );
}
