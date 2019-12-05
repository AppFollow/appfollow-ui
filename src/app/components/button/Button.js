// eslint-disable-next-line react/prop-types
export const Button = ({children}) => (
  <div className="ui-button">
    <h2>{children}</h2>
  </div>
);

Button.propTypes = {
  /**
   * Button label.
   */
  children: PropTypes.string.isRequired,
  /**
   * The color for the button
   *
   * @see See [Wikipedia](https://en.wikipedia.org/wiki/Web_colors#HTML_color_names) for a list of color names
   * @see See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) for a list of color names
   */
  color: PropTypes.string,
  /**
   * The size of the Button
   *
   * @since Version 1.0.1
   */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  /**
   * The width of the button
   *
   * @deprecated Do not use! Use `size` instead!
   */
  width: PropTypes.number,
  /**
   * Gets called when the user clicks on the button
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} allProps All props of this Button
   */
  onClick: PropTypes.func,
}
