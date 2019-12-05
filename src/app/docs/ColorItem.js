import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';

const ColorItemComponent = ({color, name}) => (
  <div>
    <div onClick={() => copy(color)}>{color}</div>
    <div onClick={() => copy(name)}>{name}</div>
  </div>
);

ColorItemComponent.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export const ColorItem = ColorItemComponent;
