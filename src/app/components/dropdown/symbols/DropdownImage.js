import PropTypes from 'prop-types';

export const DropdownImage = ({image, backgroundImageColor}) => (
  <span className="ui-select__img ui-select__symbol" style={{backgroundColor: backgroundImageColor}}>
    <img src={image} alt="img" />
  </span>
);

DropdownImage.propTypes = {
  backgroundImageColor: PropTypes.string,
  image: PropTypes.string.isRequired,
};

DropdownImage.defaultProps = {
  backgroundImageColor: '',
};
