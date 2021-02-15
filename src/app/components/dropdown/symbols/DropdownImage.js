export const DropdownImage = ({image, backgroundImageColor}) => (
  <span className="ui-select__img ui-select__symbol" style={{backgroundColor: backgroundImageColor}}>
    <img src={image} alt="img" />
  </span>
);

DropdownImage.defaultProps = {
  backgroundImageColor: '',
};
