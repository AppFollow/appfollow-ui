import React from 'react';

import {DropdownColor} from './symbols/DropdownColor';
import {DropdownFlag} from './symbols/DropdownFlag';
import {DropdownIcon} from './symbols/DropdownIcon';
import {DropdownImage} from './symbols/DropdownImage';
import {DropdownDotColor} from './symbols/DropdownDotColor';

export const DropdownSymbols = ({option}) => (
  <React.Fragment>
    {option.dotColor ? <DropdownDotColor color={option.dotColor} /> : null}

    {option.color ? <DropdownColor color={option.color} /> : null}

    {option.flag ? <DropdownFlag flag={option.flag} /> : null}

    {option.image ? (
      <DropdownImage
        image={option.image}
        backgroundImageColor={option.backgroundImageColor}
      />
    ) : null}

    {option.icon ? (
      <DropdownIcon icon={option.icon} iconColor={option.iconColor} />
    ) : null}
  </React.Fragment>
);

DropdownSymbols.defaultProps = {
  option: {},
};
