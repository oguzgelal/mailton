import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';
import isNil from 'lodash/isNil';
import { Button, Box } from 'grommet';

import getSize from '../utils/getSize';
import getColor from '../utils/getColor';
import themeSwitch from '../utils/themeSwitch';

const ButtonPlainStyled = styled(Button)`
  box-shadow: none !important;
  border-color: transparent;
  ${p => p.isFocused && `
    border-color: ${getColor(p, 'focus')};
  `}
  ${p => p.iconOnly && `
    border-radius: 200px;
    padding: ${getSize(p, 'xsmall')} !important;
  `}
`;

const ButtonPlain = ({ children, icon, ...rest }) => {
  const [isHovered, setHover] = useState(false);
  const [isFocused, setFocus] = useState(false);
  const iconOnly = !isNil(icon) && isNil(rest.label) && isNil(rest.children);

  return (
    <ButtonPlainStyled
      {...rest}
      iconOnly={iconOnly}
      isFocused={isFocused}
      isHovered={isHovered}
      hoverIndicator={themeSwitch(rest, 'light-2', 'dark-1')}
    >
      {({ hover, focus }) => {
        setHover(hover);
        setFocus(focus);

        return (
          <Box
            direction="row"
            gap={!iconOnly ? 'small' : null}
          >
            {!isNil(icon) && (
              <Box
                flex={{ shrink: 0 }}
                justify="center"
              >
                {icon}
              </Box>
            )}
            <Box flex="grow">
              {rest.label || rest.children}
            </Box>
          </Box>
        )
      }}
    </ButtonPlainStyled>
  )
};

ButtonPlain.propTypes = {
  settings: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  settings: state.settings
});

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonPlain);
