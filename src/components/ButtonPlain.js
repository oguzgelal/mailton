import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import get from 'lodash/get';
import { Button } from 'grommet';

const ButtonPlainStyled = styled(Button)`
  box-shadow: none !important;
  border-color: transparent;
  ${p => p.isFocused && `
    border-color: ${get(p, 'theme.global.colors.focus')};
  `}
`;

const ButtonPlain = props => {
  const [isHovered, setHover] = useState(false);
  const [isFocused, setFocus] = useState(false);

  return (
    <ButtonPlainStyled
      {...props}
      isFocused={isFocused}
      isHovered={isHovered}
      hoverIndicator="light-1"
    >
      {({ hover, focus }) => {
        setHover(hover);
        setFocus(focus);
        return props.label || props.children
      }}
    </ButtonPlainStyled>
  )
};

ButtonPlain.propTypes = {
};

export default ButtonPlain;
